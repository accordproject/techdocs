#!/bin/bash
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

cd ..
# Build the Cicero API
git clone https://github.com/accordproject/cicero.git
./website/node_modules/.bin/jsdoc2md -c ./website/scripts/cicero-jsdoc.conf --files ./cicero/packages/cicero-engine/{*,lib/*,lib/**/*}.js ./cicero/packages/cicero-core/{*,src/*,src/**/*}.js > ./docs/ref-cicero-api.md
./website/node_modules/.bin/jsdoc2md --template ./website/scripts/cicero-api.hbs -c ./website/scripts/cicero-jsdoc.conf --files ./cicero/packages/cicero-engine/{*,lib/*,lib/**/*}.js ./cicero/packages/cicero-core/{*,src/*,src/**/*}.js > ./docs/ref-cicero-api.md
rm -rf cicero

# Build the Ergo API
git clone https://github.com/accordproject/ergo.git
./website/node_modules/.bin/jsdoc2md -c ./website/scripts/ergo-jsdoc.conf --files ./ergo/packages/**/lib/*.js > ./docs/ref-ergo-api.md
./website/node_modules/.bin/jsdoc2md --template ./website/scripts/ergo-api.hbs -c ./website/scripts/ergo-jsdoc.conf --files ./ergo/packages/**/lib/*.js > ./docs/ref-ergo-api.md
rm -rf ergo

## Build the Concerto API
git clone https://github.com/accordproject/concerto.git
./website/node_modules/.bin/jsdoc2md -c ./website/scripts/concerto-jsdoc.conf --files ./concerto/packages/concerto-core/{*,lib/*,lib/**/*}.js > ./docs/ref-concerto-api.md
./website/node_modules/.bin/jsdoc2md --template ./website/scripts/concerto-api.hbs -c ./website/scripts/concerto-jsdoc.conf --files ./concerto/packages/concerto-core/{*,lib/*,lib/**/*}.js > ./docs/ref-concerto-api.md
rm -rf concerto

cd ./website
