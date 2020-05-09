#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

ODT_FILE_NAME=${1}

. ./bin/odt.include.sh

./bin/odtToHtml.sh  ${ODT_FILE_NAME}
./bin/htmlToVue.sh  ${HTML_FILE_NAME} ${VUE_FILE_NAME}

exit 0
