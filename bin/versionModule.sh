#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@mail.ee>

VER=`./bin/version.sh`

echo "const version = {"            >  ./src/config/version.js
echo "    version: \"${VER}\""      >> ./src/config/version.js
echo "}"                            >> ./src/config/version.js
echo "window.version = version"     >> ./src/config/version.js
echo "export default version"       >> ./src/config/version.js

exit 0
