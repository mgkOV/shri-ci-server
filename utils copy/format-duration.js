const moment = require("moment");

module.exports = ms => {
  const duration = moment.duration(ms);
  const seconds = duration.seconds();
  const minutes = duration.minutes();

  return `${minutes} мин ${seconds} сек`;
};
