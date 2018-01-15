import { Controller, HttpCode, Get, Post, Delete, Body, UseInterceptors, UsePipes, Param, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import {
  DeSerializationPipe,
  ParseIntPipe,
  LoggingInterceptor,
  TransformInterceptor,
} from '../common';

@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @UsePipes(new DeSerializationPipe())
  async create( @Body() cat: Cat): Promise<Cat> {
    return this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne( @Param('id', new ParseIntPipe()) id): Promise<Cat> {
    return await this.catsService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteOne( @Param('id', new ParseIntPipe()) id) {
    this.catsService.deleteOne(id);
  }
}