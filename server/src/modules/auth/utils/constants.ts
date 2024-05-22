import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: process.env.JWT_KEY,
};

export const IS_PUBLIC_KEY = 'isPublic';

export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
