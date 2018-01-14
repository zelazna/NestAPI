import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [CatsController],
    components: [CatsService],
    imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {}
// public configure(consumer: MiddlewaresConsumer) {
//     consumer
//       .apply(passport.authenticate('jwt', { session: false }))
//       .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL });
//   }