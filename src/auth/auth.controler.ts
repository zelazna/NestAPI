import { Controller, Post, UsePipes, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    public async getToken( @Body() user: User) {
        return await this.authService.createToken(user);
    }
}