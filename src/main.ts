import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { DurationInterceptor } from './interceptors/duration.interceptor';
//import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ----------(1) Use Middlewares------------
  const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);
  app.use(morgan('dev'));
  //app.use(HelmetMiddleware('dev'));
  //app.use(FirstMidMiddleware('dev'));

  // ----------(2) Use Guards------------
  app.useGlobalGuards();

  // ----------(3) Use Interceptors------------
  app.useGlobalInterceptors(new DurationInterceptor());

  // ----------(4) Use Pipes------------
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
