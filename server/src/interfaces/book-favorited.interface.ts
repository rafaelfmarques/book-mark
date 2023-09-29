export interface CreateBookFavoritedData {
  id?: string;
  rating: number;
  title: string;
  subtitle: string;
  description: string;
  publishedDate: string;
  publisher: string;
  smallThumb: string;
  thumb: string;
  lang: string;
  categories: string[];
  authors: string[];
}
export interface BookFavoritedInterface {
  create(data: CreateBookFavoritedData): Promise<void>;
  findAll(): Promise<Array<CreateBookFavoritedData>>;
  delete(id: string): Promise<void>;
}
