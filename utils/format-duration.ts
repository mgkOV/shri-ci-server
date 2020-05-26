import moment from "moment";

export default (ms: number | string, locale = "en") => {
  if (!ms) return "-";
  const duration = moment.duration(ms);
  const seconds = duration.seconds();
  const minutes = duration.minutes();

  return `${minutes} ${locale === "en" ? "min" : "мин"} ${seconds} ${
    locale === "en" ? "sec" : "сек"
  }`;
};
