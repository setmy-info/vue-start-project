#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@mail.ee>

DOCS_DIR=./docs

compileToVue() {
    ./bin/odtToVue.sh ${1}
}

if [ -d ${DOCS_DIR} ]
then
    FILES=`ls ${DOCS_DIR}/*.odt`
    for FILE in ${FILES}
    do
        compileToVue ${FILE}
    done
else
    echo "${DOCS_DIR} doesn't exist"
fi

exit 0
