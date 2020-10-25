import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstMidMiddleware } from './middlewares/first-mid.middleware';
import { TodosModule } from './todos/todos.module';
import { RelocationsModule } from './relocations/relocations.module';

@Module({
  imports: [TodosModule, RelocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMidMiddleware)
      .forRoutes('todos')
      .apply(HelmetMiddleware)
      .forRoutes('');
  }
}
