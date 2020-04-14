module.exports = {
  gridUrl: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:5000',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      screenshotDelay: 500,
      windowSize: {
        width: 1360,
        height: 690,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
      screenshotDelay: 500,
      windowSize: {
        width: 1360,
        height: 690,
      },
    },
    // chromeMobile: {
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //   },
    //   compositeImage: true,
    //   screenshotDelay: 1000,
    //   windowSize: {
    //     width: 375,
    //     height: 812,
    //   },
    // },
    // firefoxMobile: {
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //   },
    //   screenshotDelay: 1000,
    //   windowSize: {
    //     width: 375,
    //     height: 812,
    //   },
    // },
  },
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report',
    },
  },
};
