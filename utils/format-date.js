const moment = require("moment");

module.exports = date => {
  const dateStr = moment(date)
    .locale("ru")
    .format("DD MMM, hh:mm");

  return dateStr.substring(0, 6) + dateStr.substring(7);
};
