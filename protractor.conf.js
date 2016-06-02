exports.config = {
    
    directConnect: true,
    
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
    }
};