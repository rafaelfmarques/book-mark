import { RepositoriesService } from '@/repositories/repositories.service';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllDto } from './dto/find-all.dto';

@Injectable()
export class BookService {
  constructor(private readonly repositories: RepositoriesService) {}
  create(data: CreateBookDto) {
    return this.repositories.create(data);
  }

  async findAll(query: FindAllDto) {
    return {
      books: await this.repositories.findAll(query),
      total: await this.repositories.countAll(),
    };
  }

  remove(id: string) {
    return this.repositories.delete(id);
  }
}
