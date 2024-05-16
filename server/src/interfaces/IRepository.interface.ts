import { FindAllDto } from '@/modules/book/dto/find-all.dto';

export interface IRepository<T> {
  create(data: T): Promise<void>;
  findOne?(id: string): Promise<T>;
  findAll?(query: FindAllDto): Promise<Array<T>>;
  countAll?(query: FindAllDto): Promise<number>;
  delete(id: string): Promise<void>;
}
