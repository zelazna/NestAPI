import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Component()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOneById(id)
    }

    async deleteOne(id: number) {
        return await this.userRepository.delete({ id });
    }

}