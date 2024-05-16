import { FindAllDto } from '@/book/dto/find-all.dto';

export interface CreateBookFavoritedData {
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
export interface BookFavoritedInterface {
  create(data: CreateBookFavoritedData): Promise<void>;
  findAll(query: FindAllDto): Promise<Array<CreateBookFavoritedData>>;
  countAll(query: FindAllDto): Promise<number>;
  delete(id: string): Promise<void>;
}
