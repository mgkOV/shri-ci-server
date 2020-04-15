const assert = require('assert');

describe('New build popup', function () {
  it('New-build-popup should be displayed', function () {
    return this.browser
      .url('/')
      .click('.Header-BtnGroup .Button_type_iconText')
      .waitForVisible('.PopUp');
  });
});
