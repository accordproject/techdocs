npm install -g jsdoc-to-markdown

## Build the Cicero API
git clone https://github.com/accordproject/cicero.git
jsdoc2md --files ./cicero/packages/cicero-core/index.js ./cicero/packages/cicero-core/lib/*.js > ./docs/cicero-api.md
jsdoc2md --template ./scripts/cicero-api.hbs --files ./cicero/packages/cicero-core/index.js ./cicero/packages/cicero-core/lib/*.js > ./docs/cicero-api.md
rm -rf cicero

## Build the Ergo API
git clone https://github.com/accordproject/ergo.git
jsdoc2md -c ./scripts/ergo-jsdoc.conf --files ./ergo/packages/**/*.js > ./docs/ergo-api.md
jsdoc2md --template ./scripts/ergo-api.hbs -c ./scripts/ergo-jsdoc.conf --files ./ergo/packages/**/*.js > ./docs/ergo-api.md
rm -rf ergo