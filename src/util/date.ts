import formatDate from "date-fns/format";
import parseISO from "date-fns/parseISO";
export const dateFormatted = (date: any) =>
  date && formatDate(parseISO(date), "MMMM do, yyyy");
