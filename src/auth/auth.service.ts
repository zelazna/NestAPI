import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { UsersService } from '../users';
import { EncryptorService } from '../encryptor/encryptor.service';

@Component()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encyptorService: EncryptorService,
  ) { }

  async createToken(user) {
    const expiresIn = 60 * 60, secretOrKey = 'secret';
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    const user = await this.usersService.findOneByEmail(signedUser.email);
    return await EncryptorService.validate(signedUser.password, 'lol');

  }
}