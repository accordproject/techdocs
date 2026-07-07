#!/usr/bin/env node
/**
 * capture-playground.mjs
 * -----------------------------------------------------------------------------
 * Captures screenshots of Template Playground (playground.accordproject.org) for
 * the "Try It in Your Browser" doc, using the Chrome already installed on your
 * Mac via the DevTools Protocol. No npm install, no Node flags required.
 *
 * USAGE (run in your normal terminal, NOT inside the Claude Code sandbox):
 *
 *     node scripts/capture-playground.mjs
 *
 * Output (in docs/assets/playground/):
 *   00-initial.png ... 04-execute.png   screenshots
 *   ui-dump.json                         clickable-UI inventory (send me this if a shot is off)
 *
 * Override Chrome with:  CHROME_PATH="/path/to/chrome" node scripts/capture-playground.mjs
 * -----------------------------------------------------------------------------
 */

import http from 'node:http';
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';
import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import os from 'node:os';

// --- Config (tweak freely) ----------------------------------------------------
const URL_TARGET = 'https://playground.accordproject.org';
const TEMPLATE = 'Service Agreement';        // sample template to walk through
const WIDTH = 1440, HEIGHT = 900, SCALE = 2; // SCALE=2 => crisp retina PNGs
const SETTLE = 4000;                         // ms to let the SPA render after load
const PORT = 9222;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '..', 'docs', 'assets', 'playground');
const CHROME = process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Minimal RFC 6455 WebSocket client (no deps, any Node version) ------------
class MiniWS extends EventEmitter {
  constructor(url) {
    super();
    this.on('error', () => {}); // keep EventEmitter from throwing on late errors
    this.buf = Buffer.alloc(0);
    this.frags = [];
    const u = new URL(url);
    const key = crypto.randomBytes(16).toString('base64');
    const req = http.request({
      hostname: u.hostname, port: u.port || 80, path: u.pathname + u.search, method: 'GET',
      headers: { Connection: 'Upgrade', Upgrade: 'websocket', 'Sec-WebSocket-Key': key, 'Sec-WebSocket-Version': '13' },
    });
    req.on('upgrade', (_res, socket) => {
      this.socket = socket;
      socket.on('data', (d) => this._onData(d));
      socket.on('close', () => this.emit('close'));
      socket.on('error', (e) => this.emit('error', e));
      this.emit('open');
    });
    req.on('error', (e) => this.emit('error', e));
    req.end();
  }
  _onData(chunk) {
    this.buf = Buffer.concat([this.buf, chunk]);
    for (;;) {
      if (this.buf.length < 2) return;
      const b0 = this.buf[0], b1 = this.buf[1];
      const fin = (b0 & 0x80) !== 0;
      const opcode = b0 & 0x0f;
      const masked = (b1 & 0x80) !== 0;
      let len = b1 & 0x7f;
      let off = 2;
      if (len === 126) { if (this.buf.length < off + 2) return; len = this.buf.readUInt16BE(off); off += 2; }
      else if (len === 127) { if (this.buf.length < off + 8) return; len = Number(this.buf.readBigUInt64BE(off)); off += 8; }
      let mask;
      if (masked) { if (this.buf.length < off + 4) return; mask = this.buf.subarray(off, off + 4); off += 4; }
      if (this.buf.length < off + len) return; // wait for the rest of the frame
      let payload = Buffer.from(this.buf.subarray(off, off + len));
      if (masked) for (let i = 0; i < len; i++) payload[i] ^= mask[i & 3];
      this.buf = Buffer.from(this.buf.subarray(off + len));
      if (opcode === 0x8) { this.emit('close'); try { this.socket.end(); } catch {} return; }
      if (opcode === 0x9) { this._frame(payload, 0xA); continue; } // ping -> pong
      if (opcode === 0xA) continue;                                // pong
      this.frags.push(payload);
      if (fin) { const full = Buffer.concat(this.frags); this.frags = []; this.emit('message', { data: full.toString('utf8') }); }
    }
  }
  _frame(payload, opcode) {
    const len = payload.length;
    let header;
    if (len < 126) { header = Buffer.alloc(2); header[1] = 0x80 | len; }
    else if (len < 65536) { header = Buffer.alloc(4); header[1] = 0x80 | 126; header.writeUInt16BE(len, 2); }
    else { header = Buffer.alloc(10); header[1] = 0x80 | 127; header.writeBigUInt64BE(BigInt(len), 2); }
    header[0] = 0x80 | opcode;
    const mask = crypto.randomBytes(4);
    const out = Buffer.allocUnsafe(len);
    for (let i = 0; i < len; i++) out[i] = payload[i] ^ mask[i & 3];
    this.socket.write(Buffer.concat([header, mask, out]));
  }
  send(str) { this._frame(Buffer.from(str, 'utf8'), 0x1); }
  addEventListener(ev, fn) { this.on(ev, fn); }
}

// --- Minimal CDP client -------------------------------------------------------
class CDP {
  constructor(ws) {
    this.ws = ws; this.id = 0; this.cbs = new Map(); this.handlers = [];
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      if (m.id && this.cbs.has(m.id)) {
        const { resolve, reject } = this.cbs.get(m.id); this.cbs.delete(m.id);
        m.error ? reject(new Error(m.error.message)) : resolve(m.result);
      } else { for (const h of this.handlers) h(m); }
    });
  }
  send(method, params = {}, sessionId) {
    return new Promise((resolve, reject) => {
      const id = ++this.id; this.cbs.set(id, { resolve, reject });
      const msg = { id, method, params }; if (sessionId) msg.sessionId = sessionId;
      this.ws.send(JSON.stringify(msg));
    });
  }
  on(fn) { this.handlers.push(fn); }
}

function connect(url) {
  return new Promise((res, rej) => {
    const ws = new MiniWS(url);
    ws.addEventListener('open', () => res(new CDP(ws)));
    ws.addEventListener('error', rej);
  });
}

async function main() {
  if (!existsSync(CHROME)) {
    console.error(`Chrome not found at:\n  ${CHROME}\nSet CHROME_PATH to your Chrome binary and retry.`);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });
  const userDataDir = join(os.tmpdir(), `pw-capture-${Date.now()}`);

  console.log('Launching Chrome…');
  const chrome = spawn(CHROME, [
    `--remote-debugging-port=${PORT}`, `--user-data-dir=${userDataDir}`,
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--no-first-run', '--no-default-browser-check', `--window-size=${WIDTH},${HEIGHT}`, 'about:blank',
  ], { stdio: 'ignore' });
  process.on('exit', () => { try { chrome.kill('SIGKILL'); } catch {} });
  const cleanup = async () => { try { chrome.kill('SIGTERM'); } catch {} try { await rm(userDataDir, { recursive: true, force: true }); } catch {} };

  try {
    let wsUrl;
    for (let i = 0; i < 40; i++) {
      try { const r = await fetch(`http://127.0.0.1:${PORT}/json/version`); wsUrl = (await r.json()).webSocketDebuggerUrl; if (wsUrl) break; } catch {}
      await sleep(500);
    }
    if (!wsUrl) throw new Error('Chrome DevTools endpoint never came up.');

    const browser = await connect(wsUrl);
    const { targetId } = await browser.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId: S } = await browser.send('Target.attachToTarget', { targetId, flatten: true });

    await browser.send('Page.enable', {}, S);
    await browser.send('Runtime.enable', {}, S);
    await browser.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: SCALE, mobile: false }, S);

    const evalJS = async (expression) => {
      const { result, exceptionDetails } = await browser.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, S);
      if (exceptionDetails) throw new Error(exceptionDetails.text || 'eval failed');
      return result.value;
    };
    const navigate = async (url) => {
      const loaded = new Promise((res) => browser.on((m) => { if (m.method === 'Page.loadEventFired' && m.sessionId === S) res(); }));
      await browser.send('Page.navigate', { url }, S);
      await Promise.race([loaded, sleep(15000)]);
      await sleep(SETTLE);
    };
    const shot = async (name) => {
      const { data } = await browser.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }, S);
      await writeFile(join(OUT, name), Buffer.from(data, 'base64'));
      console.log('  saved', name);
    };
    const clickText = async (text) => {
      const found = await evalJS(`(() => {
        const want = ${JSON.stringify(text)}.toLowerCase();
        const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
        const cands = [...document.querySelectorAll('button,[role="tab"],a,[role="button"],li,summary,div,span')]
          .filter(e => vis(e) && (e.innerText || '').trim().toLowerCase().includes(want));
        if (!cands.length) return false;
        cands.sort((a,b) => {
          const ta=(a.innerText||'').trim().toLowerCase(), tb=(b.innerText||'').trim().toLowerCase();
          const ea=ta===want?0:1, eb=tb===want?0:1; if (ea!==eb) return ea-eb; return ta.length-tb.length;
        });
        cands[0].scrollIntoView({ block: 'center' }); cands[0].click(); return true;
      })()`);
      console.log(`  clickText(${JSON.stringify(text)}) -> ${found ? 'ok' : 'NOT FOUND'}`);
      return found;
    };
    const dumpUI = async () => {
      const data = await evalJS(`(() => {
        const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
        return [...document.querySelectorAll('button,[role="tab"],[role="button"],a,summary,input,select')]
          .filter(vis).map(e => ({
            tag: e.tagName.toLowerCase(), role: e.getAttribute('role') || '',
            text: (e.innerText || e.value || '').trim().slice(0, 80),
            aria: e.getAttribute('aria-label') || '', id: e.id || '',
            cls: (e.className && e.className.toString) ? e.className.toString().slice(0, 80) : '',
          })).filter(o => o.text || o.aria || o.id);
      })()`);
      await writeFile(join(OUT, 'ui-dump.json'), JSON.stringify(data, null, 2));
      console.log(`  wrote ui-dump.json (${data.length} elements)`);
      console.log('  labels: ' + [...new Set(data.map(o => o.text).filter(Boolean))].join(' | '));
    };

    console.log(`Navigating to ${URL_TARGET} …`);
    await navigate(URL_TARGET);
    await dumpUI();

    // Dismiss the in-app guided tour so it doesn't cover the UI.
    await clickText('Skip');
    await sleep(1500);

    // The Service Agreement sample loads by default:
    // Data Model (Concerto) + Template (TemplateMark) + Data (JSON) on the left, live Preview on the right.
    await shot('01-editor.png');

    // AI Assistant panel — natural-language template authoring (ties to our AI story).
    if (await clickText('AI Assistant')) { await sleep(1800); await shot('02-ai-assistant.png'); }

    console.log(`\nDone. Screenshots + ui-dump.json are in:\n  ${OUT}`);
  } finally {
    await cleanup();
  }
}

main().catch((e) => { console.error('ERROR:', e.message); process.exit(1); });
