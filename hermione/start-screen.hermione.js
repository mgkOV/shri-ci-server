const assert = require('assert');
const axios = require('axios');
const api = require('../api/shri-api');

describe('Start screen', function () {
  beforeEach(() => {
    return axios.delete('http://localhost:5000/api/settings');
  });

  it('Settings screenshot must be identical', function () {
    return this.browser
      .url('/')
      .waitForExist('.StartScreen', 1000)
      .assertView('Start screen', 'body');
  });

  it('Settings screenshot must be identical on mobile screen', function () {
    return this.browser
      .setViewportSize(
        {
          width: 365,
          height: 865,
        },
        false
      )
      .url('/')
      .waitForExist('.StartScreen', 1000)
      .assertView('Start screen mobile', 'body');
  });
});
