import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { IsPublic } from './utils/constants';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @IsPublic()
  @ApiBody({ type: LoginDto })
  signIn(@Body() dto: LoginDto) {
    return this.authService.signIn(dto);
  }
}
