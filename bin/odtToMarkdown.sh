#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@mail.ee>

FORMAT_OUT=markdown
#FORMAT_OUT=commonmark
#FORMAT_OUT=markdown_strict

./tools/pandoc/bin/pandoc -f odt -t ${FORMAT_OUT} -o ${2} ${1}

exit 0
