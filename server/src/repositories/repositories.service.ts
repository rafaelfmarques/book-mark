import { Injectable } from '@nestjs/common';

import {
  BookFavoritedInterface,
  CreateBookFavoritedData,
} from '@/interfaces/book-favorited.interface';
import { PrismaService } from '@/database/prisma/prisma.service';

@Injectable()
export class RepositoriesService implements BookFavoritedInterface {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CreateBookFavoritedData[]> {
    return await this.prisma.bookFavorited.findMany();
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
