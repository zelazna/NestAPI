import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule, CatsController } from './cats';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) { }
  configure(consumer: MiddlewaresConsumer): void {
    // consumer.apply([LoggerMiddleware]).forRoutes(
    //   { path: '/cats', method: RequestMethod.GET },
    //   { path: '/cats', method: RequestMethod.POST },
    //   // { path: '/cats', method: RequestMethod.ALL }
    // );
    consumer.apply(LoggerMiddleware)
      .with('ApplicationModule')
      .forRoutes(CatsController);
  }
}
