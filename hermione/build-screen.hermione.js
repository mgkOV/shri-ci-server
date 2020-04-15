const assert = require('assert');

describe('Build screen', function () {
  it('Build screenshot must be identical', function () {
    return this.browser
      .url('/build/82893907-b9fc-4dc4-8349-5ce1109c52a6')
      .waitForExist('.LogScreen', 1000)
      .assertView('Build screen', 'body');
  });

  it('Build screenshot must be identical on mobile screen', function () {
    return this.browser
      .setViewportSize(
        {
          width: 365,
          height: 865,
        },
        false
      )
      .url('/build/82893907-b9fc-4dc4-8349-5ce1109c52a6')
      .waitForExist('.LogScreen', 1000)
      .assertView('Build screen mobile', 'body');
  });
});
