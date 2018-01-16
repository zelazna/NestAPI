import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptorService } from './encryptor.service';

@Module({
    components: [EncryptorService],
    exports: [EncryptorService],
})
export class EncryptorModule { }