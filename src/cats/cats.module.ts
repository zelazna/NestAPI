import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/passport/jwt.strategy';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
    controllers: [CatsController],
    components: [CatsService, AuthService, JwtStrategy],
    imports: [TypeOrmModule.forFeature([Cat]), AuthModule],
})
export class CatsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/cats', method: RequestMethod.ALL });
    }
}
