import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from '../repositories/userRepository.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepo: UserRepository, private jwtService: JwtService) {}

  async signIn({ email, password }: LoginDto) {
    const user = await this.userRepo.findByEmail(email);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (user && isPasswordValid) {
      return {
        token: await this.jwtService.signAsync({ id: user.id, email: user.email, name: user.name }),
        user: { email: user.email, name: user.name },
      };
    }
    throw new UnauthorizedException();
  }
}
