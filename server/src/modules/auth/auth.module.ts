import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RepositoriesModule } from '../repositories/repositories.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './utils/constants';

@Module({
  imports: [
    RepositoriesModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
