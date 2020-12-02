

import * as FS from 'fs';

const inputFile = process.argv[2]

let array = FS.readFileSync(inputFile).toString().split("\n");

function isSelfClosingLink(line:string) {
    return /^<a.*\/>$/.test(line)
}

function isTranslationLink(line:string) {
    return /Qcert[.]Translation[.]/.test(line)
}

function isOptimLink(line:string) {
    return /Optim/.test(line)
}

function isPath(line:string) {
    return /\<path/.test(line)
}

function getColor(line:string) {
    const myArray = /stroke='([^']*)'/.exec(line);
    if (myArray != null) return myArray[1];
    else return '';
}

function addColor(array:string[], i:number,color:string) {
    array[i] = array[i].replace("/>"," fill='"+color+"'/>");
}

function isTextual(line:string) {
    return /<\/?text/.test(line)||/<\/?tspan/.test(line)
}

function widen(array:string[], i:number, offset:number) {
    const line = array[i]
    array[i] = "</a>"
    array.splice(i-offset, 0, line.replace("/>", ">"))
}
for(let i = 0; i < array.length; ) {
    const line = array[i]
    i++;
    if(isSelfClosingLink(line)) {
        for(; i < array.length && line === array[i]; i++) {
            array[i] = undefined
        }
    }
}
array = array.filter(line => line !== undefined)
for(let i = 0; i < array.length; i++) {
    const line = array[i];
    if(isSelfClosingLink(line)) {
        if(isTranslationLink(line) || isOptimLink(line)) {
    
            if(i >= 2) {
                if(isPath(array[i-1]) && isPath(array[i-2])) {
		    const color = getColor(array[i-2]);
		    addColor(array,i-1,color);
		    widen(array, i, 2)
                }
                i++
            }
        } else {
    
            let prev = i-1;
            while(prev > 0 && isTextual(array[prev])) {
                prev--
            }
            prev++
            widen(array, i, i-prev)
            i++
        }
    }
}
const fullSVG = array.join('\n')
const outputSVG = fullSVG.replace(/<a /g, "<a target='_top' ")


console.log(outputSVG)

