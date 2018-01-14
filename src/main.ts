import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { HttpExceptionFilter, ValidationPipe } from './common';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	// app.useGlobalFilters(new HttpExceptionFilter());
	// app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
