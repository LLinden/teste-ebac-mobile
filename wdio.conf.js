const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "Pixel 2 API 28",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/wcandroid-11.0.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        "adbExecTimeout": 40000
    }],
    waitforTimeout: 30000,
    mochaOpts: {
        timeout: 30000
    }
}