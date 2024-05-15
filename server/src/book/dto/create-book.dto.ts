import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'GjgQCwAAQBAJ' })
  bookId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 5 })
  rating: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Harry Potter e a Pedra Filosofal' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra "H". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, no 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '2015-12-08' })
  publishedDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Pottermore Publishing' })
  publisher: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'http://books.google.com/books/content?id=GjgQCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  })
  smallThumb: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'http://books.google.com/books/content?id=GjgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  })
  thumb: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({ example: ['Juvenile Fiction'] })
  categories: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({ example: ['J.K. Rowling'] })
  authors: string[];
}
