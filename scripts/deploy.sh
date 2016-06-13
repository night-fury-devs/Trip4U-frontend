#! /bin/bash

set -ev

if [ ${TRAVIS_BRANCH} == "dev" ]
then
    cd dist;
    npm i --production;
    cd ..;
    firebase deploy --token ${TOKEN};
fi
