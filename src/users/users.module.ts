import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [UsersController],
    components: [UsersService],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [UsersService],
})
export class UsersModule { }