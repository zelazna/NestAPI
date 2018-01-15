import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { DeSerializationPipe } from '../common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @UsePipes(new DeSerializationPipe())
    async create( @Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }
}