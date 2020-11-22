import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderDemoModule } from './provider-demo/provider-demo.module';

@Module({
  imports: [ProviderDemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
