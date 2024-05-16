import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/userRepository.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userAlreadyExists = await this.userRepository.findExistingUser(createUserDto.email);

    if (userAlreadyExists)
      throw new HttpException('User already exists', HttpStatus.INTERNAL_SERVER_ERROR);

    return await this.userRepository.create(createUserDto);
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  remove(id: number) {
    // const booksFavotied = await
  }
}
