import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindAllDto {
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  page: number;

  @IsNotEmpty()
  @ApiProperty({ example: 10 })
  take: number;
}
