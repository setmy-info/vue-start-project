#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

ODT_FILE_NAME=${1}

. ./bin/odt.include.sh

./bin/odtToMarkdown.sh ${ODT_FILE_NAME} ${MARKDOWN_FILE_NAME}
./bin/markdownToHtml.sh ${MARKDOWN_FILE_NAME} ${HTML_FILE_NAME}
cp ${HTML_FILE_NAME} ./src/parts

exit 0
