import { IsNotEmpty } from 'class-validator';

export class FindAllDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  take: number;
}
