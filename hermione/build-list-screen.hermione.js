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
});
