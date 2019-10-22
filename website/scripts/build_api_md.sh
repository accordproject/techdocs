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

## Build the Cicero API
git clone https://github.com/accordproject/cicero.git
./node_modules/.bin/jsdoc2md --files ./cicero/packages/cicero-engine/index.js ./cicero/packages/cicero-engine/lib/*.js ./cicero/packages/cicero-core/index.js ./cicero/packages/cicero-core/src/*.js > ../docs/cicero-api.md
./node_modules/.bin/jsdoc2md --template ./scripts/cicero-api.hbs --files ./cicero/packages/cicero-engine/index.js ./cicero/packages/cicero-engine/lib/*.js ./cicero/packages/cicero-core/index.js ./cicero/packages/cicero-core/src/*.js > ../docs/cicero-api.md
rm -rf cicero

## Build the Ergo API
git clone https://github.com/accordproject/ergo.git
./node_modules/.bin/jsdoc2md -c ./scripts/ergo-jsdoc.conf --files ./ergo/packages/**/lib/*.js > ../docs/ergo-api.md
./node_modules/.bin/jsdoc2md --template ./scripts/ergo-api.hbs -c ./scripts/ergo-jsdoc.conf --files ./ergo/packages/**/lib/*.js > ../docs/ergo-api.md
rm -rf ergo

## Build the Concerto API
git clone https://github.com/accordproject/concerto.git
./node_modules/.bin/jsdoc2md -c ./scripts/concerto-jsdoc.conf --files ./concerto/packages/concerto-core/index.js ./concerto/packages/concerto-core/lib/**/*.js > ../docs/concerto-api.md
./node_modules/.bin/jsdoc2md --template ./scripts/concerto-api.hbs -c ./scripts/concerto-jsdoc.conf --files ./concerto/packages/concerto-core/index.js ./concerto/packages/concerto-core/lib/**/*.js > ../docs/concerto-api.md
rm -rf concerto
