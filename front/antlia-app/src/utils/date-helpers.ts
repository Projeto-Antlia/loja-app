import moment from "moment-timezone";
import "moment/locale/pt-br"

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

export function formatDateTime(date: string | undefined): string {
  if (!date) return "";
  const dateFormated = moment(new Date(date)).tz("GMT").format("DD MMM - HH:mm");
  return dateFormated.toUpperCase();
}
