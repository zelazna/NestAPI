import { Module } from '@nestjs/common';
import { EncryptorService } from './encryptor.service';

@Module({
    components: [EncryptorService],
    exports: [EncryptorService]
})
export class EncryptorModule {
}