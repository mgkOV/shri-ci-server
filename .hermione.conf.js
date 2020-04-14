module.exports = {
  gridUrl: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:5000',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
