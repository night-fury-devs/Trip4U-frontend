#! /bin/bash

set -ev

if [ $TRAVIS_BRANCH == "dev" ]
then
    firebase deploy --token $TOKEN;
fi
