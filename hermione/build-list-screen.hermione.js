const assert = require('assert');

describe('Build list', function () {
  it('Build list screenshot must be identical', function () {
    return this.browser.url('/').assertView('Build list screen', 'body');
  });

  it('Build list screenshot must be identical on mobile screen', function () {
    return this.browser
      .setViewportSize(
        {
          width: 365,
          height: 865,
        },
        false
      )
      .url('/')
      .assertView('Build list mobile screen', 'body');
  });

  it('New-build-popup should be displayed', function () {
    return this.browser
      .url('/')
      .click('.Header-BtnGroup .Button_type_iconText')
      .waitForVisible('.PopUp');
  });

  it('New-build-popup screenshot must be identical', function () {
    return this.browser
      .url('/')
      .click('.Header-BtnGroup .Button_type_iconText')
      .assertView('New-build-popup', 'body');
  });

  it('Show more should show more :)', function () {
    return this.browser
      .url('/')
      .click('.History + .Button_fullWidthAtSmallScreen')
      .waitForVisible('.History-Item:nth-child(11)');
  });

  it('Settings buttons should redirect to settings screen', function () {
    return this.browser
      .url('/')
      .click('.Header-BtnGroup .Button_type_icon')
      .getUrl()
      .then((url) => {
        assert.strictEqual(
          url,
          'http://localhost:5000/settings',
          'Don not redirect to settings screen'
        );
      });
  });

  it('Click on build card should redirect to build screen', function () {
    return this.browser
      .url('/')
      .click('.History-Item.Card')
      .getUrl()
      .then((url) => {
        assert.match(
          url,
          /http:\/\/localhost:5000\/build\//,
          'Don not redirect to build  screen'
        );
      });
  });
});
