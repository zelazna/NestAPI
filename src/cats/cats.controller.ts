import { Controller, Get, Post, Body, UseInterceptors, UseFilters, UsePipes, Param, UseGuards, ReflectMetadata } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import {
  ForbiddenException,
  ValidationPipe,
  HttpExceptionFilter,
  ParseIntPipe,
  RolesGuard,
  Roles,
  LoggingInterceptor,
  TransformInterceptor
} from '../common';

// @UseFilters(new HttpExceptionFilter())
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  // @Roles('admin')
  @UsePipes(new ValidationPipe())
  async create( @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne( @Param('id', new ParseIntPipe()) id): Promise<Cat> {
    return await this.catsService.findOne(id);
  }
}