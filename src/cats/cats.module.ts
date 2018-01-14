import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [CatsController],
    components: [CatsService],
    exports: [CatsService],
    imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {
    constructor(private readonly catsService: CatsService) { }
}