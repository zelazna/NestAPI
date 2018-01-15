import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ email });
    }

    async deleteOne(id: number) {
        return await this.userRepository.delete({ id });
    }

}