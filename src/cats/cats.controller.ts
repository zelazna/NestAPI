import { Controller, HttpCode, Get, Post, Delete, Body, UseInterceptors, UsePipes, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import {
  ValidationPipe,
  ParseIntPipe,
  LoggingInterceptor,
  TransformInterceptor
} from '../common';

@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  async create( @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
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