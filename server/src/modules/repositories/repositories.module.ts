import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { BookRepository } from './bookRepository.service';
import { UserRepository } from './userRepository.service';

@Module({
  imports: [DatabaseModule],
  providers: [BookRepository, UserRepository],
  exports: [BookRepository, UserRepository],
})
export class RepositoriesModule {}
