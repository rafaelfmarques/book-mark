import { PrismaService } from '@/database/prisma/prisma.service';
import { IRepository, IUser } from '@/interfaces';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository implements IRepository<User> {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async create(data: IUser): Promise<void> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);

    await this.prisma.user.create({ data: { ...data, password: hash } });
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        booksFavoriteds: {
          include: { book: true },
        },
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
