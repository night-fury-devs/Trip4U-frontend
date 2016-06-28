#! /bin/bash

set -ev

if [ ${TRAVIS_BRANCH} == "dev" ]
then
    ng build;
    firebase deploy --token ${TOKEN};
fi
