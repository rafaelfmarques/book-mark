import { BookDataProps } from "@/interfaces/BookData.interface";
import { apiBooks } from ".";

export const getBooks = async (input: string) => {
  try {
    const { data } = await apiBooks.get("books/v1/volumes", {
      params: {
        q: input,
      },
    });
    const result = data.items.map((book: BookDataProps) => book.volumeInfo);
    return result;
  } catch (error) {
    throw error;
  }
};
