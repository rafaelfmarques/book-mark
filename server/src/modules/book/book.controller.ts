import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllDto } from './dto/find-all.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('book')
@ApiTags('Book')
@ApiBearerAuth('access-token')
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
    summary: 'Busca os livros favoritados pelo usuário para uma lista paginada',
  })
  findAll(@Query() query: FindAllDto) {
    return this.bookService.findAll(query);
  }

  @Get('without-filter')
  @ApiOperation({
    summary: 'Busca os livros favoritados pelo usuário sem paginação',
  })
  findBooksWithoutFilter() {
    return this.bookService.findBooksWithoutFilter();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um livro favorito',
  })
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
