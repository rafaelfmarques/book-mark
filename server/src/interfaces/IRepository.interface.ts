import { FindAllDto } from '@/modules/book/dto/find-all.dto';
import { IUserToken } from './IUserToken.interface';

export interface IRepository<T> {
  create(data: T, user: IUserToken): Promise<void>;
  findOne?(id: string): Promise<T>;
  findAll?(query: FindAllDto, user: IUserToken): Promise<Array<T>>;
  countAll?(user: IUserToken): Promise<number>;
  delete(id: string): Promise<void>;
}
