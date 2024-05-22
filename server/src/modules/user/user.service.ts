import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/userRepository.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BookRepository } from '../repositories/bookRepository.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bookRepository: BookRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userAlreadyExists = await this.userRepository.findByEmail(createUserDto.email);

    if (userAlreadyExists)
      throw new HttpException('User already exists', HttpStatus.INTERNAL_SERVER_ERROR);

    return await this.userRepository.create(createUserDto);
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id);
    if (user) return await this.userRepository.delete(id);
  }
}
