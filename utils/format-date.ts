import moment from "moment";

export default (date: string) => {
  const dateStr = moment.utc(date).local().locale("ru").format("DD MMM, kk:mm");

  return dateStr.substring(0, 6) + dateStr.substring(7);
};
