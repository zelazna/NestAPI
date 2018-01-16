import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controler';
// import { UsersModule } from '../users';
import { EncryptorModule } from '../encryptor';

@Module({
    controllers: [AuthController],
    components: [AuthService, JwtStrategy],
    imports: [EncryptorModule],
    exports: [AuthService, JwtStrategy],
})
export class AuthModule { }