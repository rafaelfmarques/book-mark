import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllDto } from './dto/find-all.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('book')
@ApiTags('Book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiOperation({
    summary: 'Salva os livros favoritados pelo usuário',
  })
  @ApiBody({ type: CreateBookDto })
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os livros favoritados pelo usuário',
  })
  findAll(@Query() query: FindAllDto) {
    return this.bookService.findAll(query);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um livro favorito',
  })
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
