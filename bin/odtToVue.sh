#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

ODT_FILE_NAME=${1}
MARKDOWN_FILE_NAME=${ODT_FILE_NAME}.text
HTML_FILE_NAME=${MARKDOWN_FILE_NAME}.html
VUE_FILE_NAME=${HTML_FILE_NAME}.vue

./bin/odtToHtml.sh  ${ODT_FILE_NAME}
./bin/htmlToVue.sh  ${HTML_FILE_NAME} ${VUE_FILE_NAME}

exit 0
