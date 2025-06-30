#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@mail.ee>

DEPLOY_FILE_NAME=.deploy

if [ -f ./"${DEPLOY_FILE_NAME}" ]; then
    . ./${DEPLOY_FILE_NAME}
    yarn dodeploy
else
    echo ".deploy file doesn't exist. Deployment is skipped!"
fi

exit 0
