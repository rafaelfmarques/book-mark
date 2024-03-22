export const transformDate = (date: string) => {
  if (/^\d{4}$/.test(date)) return date;

  const dateParsed = date.split("-");
  return `${dateParsed[2]}/${dateParsed[1]}/${dateParsed[0]}`;
};
