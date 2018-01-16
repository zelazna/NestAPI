import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [CatsController],
    components: [CatsService],
    imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/cats', method: RequestMethod.ALL });
    }
}
