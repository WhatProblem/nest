import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExceptionDemoModule } from './exception-demo/exception-demo.module';
import { MiddleDemoModule } from './middle-demo/middle-demo.module';
import { ProviderDemoModule } from './provider-demo/provider-demo.module';
import { ProviderExportModule } from './provider-demo/provider.export.module';

@Module({
  imports: [
    // 提供者 provider
    ProviderDemoModule,
    ProviderExportModule,
    // 中间件 middle
    MiddleDemoModule,
    // 异常过滤器
    ExceptionDemoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
