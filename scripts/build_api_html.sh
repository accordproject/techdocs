# install tools
npm install -g jsdoc

## Build the Cicero API

# clone the source code
git clone https://github.com/accordproject/cicero.git

rm -rf ./website/static/cicero-api/
jsdoc -c ./scripts/cicero-jsdoc.conf -r ./cicero -d ./website/static/cicero-api/

# cleanup
rm -rf cicero

## Build the Ergo API

# clone the source code
git clone https://github.com/accordproject/ergo.git

rm -rf ./website/static/ergo-api/
jsdoc -c ./scripts/ergo-jsdoc.conf -r ./ergo -d ./website/static/ergo-api/

# cleanup
rm -rf ergo