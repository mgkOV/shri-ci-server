import moment from "moment";

export default (ms: number | string) => {
  if (!ms) return "-";
  const duration = moment.duration(ms);
  const seconds = duration.seconds();
  const minutes = duration.minutes();

  return `${minutes} мин ${seconds} сек`;
};
