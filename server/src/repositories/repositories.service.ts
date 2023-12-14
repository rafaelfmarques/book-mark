import { Injectable } from '@nestjs/common';

import {
  BookFavoritedInterface,
  CreateBookFavoritedData,
} from '@/interfaces/book-favorited.interface';
import { PrismaService } from '@/database/prisma/prisma.service';
import { FindAllDto } from '@/book/dto/find-all.dto';

@Injectable()
export class RepositoriesService implements BookFavoritedInterface {
  constructor(private prisma: PrismaService) {}

  async findAll(query: FindAllDto): Promise<CreateBookFavoritedData[]> {
    const take = query.take ? Number(query.take) : 10;

    const skip = (query.page - 1) * take;

    return await this.prisma.bookFavorited.findMany({ skip: skip, take: take });
  }

  async countAll() {
    return await this.prisma.bookFavorited.count();
  }

  async create(data: CreateBookFavoritedData): Promise<void> {
    await this.prisma.bookFavorited.create({ data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.bookFavorited.delete({
      where: {
        id,
      },
    });
  }
}
