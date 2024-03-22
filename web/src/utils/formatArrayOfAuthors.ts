export function formatArrayOfAuthors(authors: string[]) {
  return authors.join(", ").replace(/,([^,]*)$/, " e$1");
}
