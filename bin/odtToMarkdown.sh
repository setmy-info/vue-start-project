#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

./tools/pandoc/bin/pandoc -f odt -t markdown -o ${2} ${1}

exit 0
