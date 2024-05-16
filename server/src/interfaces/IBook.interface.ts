export interface IBook {
  id?: string;
  bookId: string;
  rating: number;
  title: string;
  description: string;
  publishedDate: string;
  publisher: string;
  smallThumb: string;
  thumb: string;
  authors: string[];
}
