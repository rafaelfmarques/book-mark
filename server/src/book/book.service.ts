import { RepositoriesService } from '@/repositories/repositories.service';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly repositories: RepositoriesService) {}
  create(data: CreateBookDto) {
    return this.repositories.create(data);
  }

  findAll() {
    return this.repositories.findAll();
  }

  remove(id: string) {
    return this.repositories.delete(id);
  }
}
