#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

CUR_DIR=`pwd`
TOOLS_DIR=./tools

PANDOC_VERSION=2.9.2.1

mkdir -p ${TOOLS_DIR}
cd ${TOOLS_DIR}
wget -c https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/pandoc-${PANDOC_VERSION}-linux-amd64.tar.gz
tar xvzf pandoc-${PANDOC_VERSION}-linux-amd64.tar.gz
mv pandoc-${PANDOC_VERSION} pandoc
cd ${CUR_DIR}

exit 0
