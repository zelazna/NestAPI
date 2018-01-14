import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptorModule } from '../encryptor/encryptor.module';

@Module({
    controllers: [UsersController],
    components: [UsersService],
    imports: [TypeOrmModule.forFeature([User]), EncryptorModule],
    exports: [UsersService]
})
export class UsersModule { }