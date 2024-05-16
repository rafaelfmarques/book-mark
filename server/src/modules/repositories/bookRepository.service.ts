import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/database/prisma/prisma.service';
import { FindAllDto } from '@/modules/book/dto/find-all.dto';
import { IBook, IRepository } from '@/interfaces';

@Injectable()
export class BookRepository implements IRepository<IBook> {
  constructor(private prisma: PrismaService) {}

  async findAll(query: FindAllDto): Promise<IBook[]> {
    const take = query.take ? Number(query.take) : 10;

    const skip = (query.page - 1) * take;

    return await this.prisma.book.findMany({ skip: skip, take: take });
  }

  async findWithoutFilters() {
    return await this.prisma.book.findMany();
  }

  async countAll() {
    return await this.prisma.book.count();
  }

  async create(data: IBook): Promise<void> {
    await this.prisma.book.create({ data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
