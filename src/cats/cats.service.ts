import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { plainToClass } from "class-transformer";

@Component()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) { }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async create(cat: Cat) {
        return await this.catRepository.save(cat);
    }

    async findOne(id: number): Promise<Cat> {
        return await this.catRepository.findOneById(id)
    }

    async delete(id: number) {
        return await this.catRepository.delete({ id });
    }

}