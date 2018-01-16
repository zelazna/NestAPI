import { Controller, Post, UsePipes, Body, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User, UsersService } from '../users';
import { EncryptorService } from '../encryptor/index';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    @Post()
    public async getToken( @Body() credentials: User) {
        const { email, password } = credentials;
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            const result = await EncryptorService.validate(password, user.password);
            if (result) {
                return await this.authService.createToken(credentials);
            }
        }
        throw new BadRequestException('invalid credentials');
    }
}