#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@mail.ee>

HTML=`node ./bin/markdownToHtml.js ${1}`
echo ${HTML} > ${2}

exit 0
