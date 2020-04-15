module.exports = {
  gridUrl: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:5000',
  compositeImage: true,

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
  },
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report',
    },
  },
};
