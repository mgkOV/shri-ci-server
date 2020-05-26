import moment from "moment";

export default (date: string, locale = "en") => {
  const dateStr = moment.utc(date).local().locale(locale).format("DD MMM, kk:mm");

  return dateStr.substring(0, 6) + dateStr.substring(7);
};
