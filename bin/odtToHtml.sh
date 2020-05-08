#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

ODT_FILE_NAME=${1}
MARKDOWN_FILE_NAME=${ODT_FILE_NAME}.text
HTML_FILE_NAME=${MARKDOWN_FILE_NAME}.html

./bin/odtToMarkdown.sh ${ODT_FILE_NAME} ${MARKDOWN_FILE_NAME}
./bin/markdownToHtml.sh ${MARKDOWN_FILE_NAME} ${HTML_FILE_NAME}

exit 0
