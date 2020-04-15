const assert = require('assert');
const axios = require('axios');

describe('Start screen', function () {
  beforeEach(() => {
    return axios.delete('http://localhost:5000/api/settings');
  });

  afterEach(() => {
    return axios.get(
      'http://localhost:5000/api/builds/__restore-settings__/logs'
    );
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

  it('Click open settings should redirect to settings screen', function () {
    return this.browser
      .url('/')
      .waitForExist('.StartScreen', 1000)
      .click('.Button_tone_action')
      .getUrl()
      .then((url) => {
        assert.strictEqual(url, 'http://localhost:5000/settings');
      });
  });
});
