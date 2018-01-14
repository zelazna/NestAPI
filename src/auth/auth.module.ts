import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
    components: [AuthService, JwtStrategy],
    exports: [AuthService, JwtStrategy]
})
export class AuthModule { }