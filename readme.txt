Install locally

# Install protractor
npm install

# Download the selenium standalone server
    ./node_modules/protractor/bin/webdriver-manager update


Install globally

# Install protractor
npm install protractor -g

# Download the selenium standalone server
webdriver-manager update


Run

# Protractor installed locally
#as was said on one website, but the last one of these commands was enough to launch tests locally
npm start
./node_modules/protractor/bin/webdriver-manager start

#I've just used this command to launch e2e tests locally
./node_modules/protractor/bin/protractor test/protractor-conf.js

