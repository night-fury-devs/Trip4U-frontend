#! /bin/bash

set -ev

if [ ${TRAVIS_BRANCH} == "dev" ]
then
    ng build -prod;
    firebase deploy --token ${TOKEN};
fi
