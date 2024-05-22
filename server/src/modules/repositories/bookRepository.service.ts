import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/database/prisma/prisma.service';
import { FindAllDto } from '@/modules/book/dto/find-all.dto';
import { IBook, IRepository } from '@/interfaces';
import { IUserToken } from '@/interfaces/IUserToken.interface';

@Injectable()
export class BookRepository implements IRepository<IBook> {
  constructor(private prisma: PrismaService) {}

  async findAll(query: FindAllDto, { user }: IUserToken): Promise<IBook[]> {
    const take = query.take ? Number(query.take) : 10;

    const skip = (query.page - 1) * take;

    return await this.prisma.book.findMany({
      skip: skip,
      take: take,
      where: {
        booksFavoriteds: {
          some: {
            userId: user.id,
          },
        },
      },
    });
  }

  async findWithoutFilters() {
    return await this.prisma.book.findMany();
  }

  async countAll({ user }: IUserToken) {
    return await this.prisma.book.count({
      where: {
        booksFavoriteds: {
          some: {
            userId: user.id,
          },
        },
      },
    });
  }

  async create(data: IBook, { user }: IUserToken): Promise<void> {
    await this.prisma.book.create({
      data: {
        ...data,
        booksFavoriteds: {
          create: {
            userId: user.id,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<IBook> {
    return await this.prisma.book.findFirst({
      where: {
        OR: [
          { id },
          {
            bookId: id,
          },
        ],
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
