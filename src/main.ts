import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './guard-demo/roles.guard';
import { LoggingInterceptor } from './interceptor-demo/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe()); // 全局范围管道
  // app.useGlobalGuards(new RolesGuard()) // 全局守卫
  // app.useGlobalInterceptors(new LoggingInterceptor()) // 全局拦截器
  await app.listen(3000);
}
bootstrap();
