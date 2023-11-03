import moment from "moment-timezone";

export function formatDate(date: string | undefined): string {
  if (!date) return "";
  const dateFormated = moment(new Date(date)).tz("GMT").format("DD MMM");
  return dateFormated.toUpperCase();
}

export function getMonth(date: string | undefined): string {
  if (!date) return "";
  const formated = moment(new Date(date)).tz("GMT").format("MMM");
  return formated.toUpperCase();
}

export function getDate(date: string | undefined): string {
  if (!date) return "";
  const formated = moment(new Date(date)).tz("GMT").format("DD/MM");
  return formated.toUpperCase();
}
