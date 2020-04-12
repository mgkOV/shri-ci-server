const moment = require("moment");

module.exports = (date) => {
  const dateStr = moment.utc(date).local().locale("ru").format("DD MMM, kk:mm");

  return dateStr.substring(0, 6) + dateStr.substring(7);
};
