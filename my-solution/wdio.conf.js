exports.config = {

    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800']
        }
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://todomvc.com/examples/vue/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },
     reporters: ['spec'],
    afterTest: test => {
        browser.saveScreenshot(`${process.cwd()}/screenshots/${test.title}.png`)
    }
}
