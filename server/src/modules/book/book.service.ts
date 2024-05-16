import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllDto } from './dto/find-all.dto';
import { BookRepository } from '../repositories/bookRepository.service';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}
  create(data: CreateBookDto) {
    return this.bookRepository.create(data);
  }

  async findAll(query: FindAllDto) {
    return {
      books: await this.bookRepository.findAll(query),
      total: await this.bookRepository.countAll(),
    };
  }

  async findBooksWithoutFilter() {
    return this.bookRepository.findWithoutFilters();
  }

  remove(id: string) {
    return this.bookRepository.delete(id);
  }
}
