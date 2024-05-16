import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/database/prisma/prisma.service';
import { IRepository, IUser } from '@/interfaces';

@Injectable()
export class UserRepository implements IRepository<IUser> {
  constructor(private prisma: PrismaService) {}

  async findExistingUser(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async create(data: IUser): Promise<void> {
    await this.prisma.user.create({ data });
  }

  async findOne(id: string): Promise<IUser> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
      include: { BooksFavoriteds: true },
    });
  }
}
