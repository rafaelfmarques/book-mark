import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { RepositoriesModule } from '@/modules/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
