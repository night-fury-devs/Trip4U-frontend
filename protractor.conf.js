var config = {
    
    directConnect: true,
    baseUrl: 'http://localhost:3000/',
    specs: [
        'tests/e2e/*.spec.ts'
    ],
    capabilities: {
        'browserName': 'firefox'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    useAllAngular2AppRoots: true
};

if (process.env.TRAVIS) {
    config.directConnect = false;
    config.baseUrl = 'https://project-762377074824993679.firebaseapp.com/';
    config.sauceUser = process.env.SAUCE_USERNAME;
    config.sauceKey = process.env.SAUCE_ACCESS_KEY;
    config.capabilities = {
        browserName: 'firefox',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    };
}

exports.config = config;