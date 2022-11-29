const { join } = require("path");
const allure = require("allure-commandline");
const video = require("wdio-video-reporter");

exports.config = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",
  capabilities: [
    {
      platformName: "Android",
      platformVersion: "9.0",
      deviceName: "Pixel 2 API 28",
      automationName: "UiAutomator2",
      app: join(process.cwd(), "./app/android/wcandroid-11.0.apk"),
      appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
      adbExecTimeout: 40000,
    },
  ],
  waitforTimeout: 30000,
  mochaOpts: {
    timeout: 30000,
  },
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    [
      video,
      {
        saveAllVideos: false, // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
      },
    ],
  ],
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
  afterStep: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    if (error) {
      await driver.takeScreenshot();
    }
  },
};
