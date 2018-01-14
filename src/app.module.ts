import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule, CatsController } from './cats';
import { UsersModule, UsersController } from './users';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) { }
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(LoggerMiddleware)
      .with('ApplicationModule')
      .forRoutes(CatsController);
  }
}
