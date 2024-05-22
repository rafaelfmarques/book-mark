import { HttpCode, HttpException, HttpStatus, Inject, Injectable, Scope } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllDto } from './dto/find-all.dto';
import { BookRepository } from '../repositories/bookRepository.service';
import { REQUEST } from '@nestjs/core';
import { IUserToken } from '@/interfaces/IUserToken.interface';

@Injectable({ scope: Scope.REQUEST })
export class BookService {
  constructor(
    private readonly bookRepository: BookRepository,
    @Inject(REQUEST)
    private readonly request: Request & IUserToken,
  ) {}
  async create(data: CreateBookDto) {
    const book = await this.bookRepository.findOne(data.bookId);
    if (book) throw new HttpException('Book already exists', HttpStatus.CONFLICT);
    return this.bookRepository.create(data, this.request);
  }

  async findAll(query: FindAllDto) {
    return {
      books: await this.bookRepository.findAll(query, this.request),
      total: await this.bookRepository.countAll(this.request),
    };
  }

  async findBooksWithoutFilter() {
    return this.bookRepository.findWithoutFilters();
  }

  async remove(id: string) {
    const book = await this.bookRepository.findOne(id);
    if (book) return this.bookRepository.delete(id);
  }
}
