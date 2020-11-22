import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderDemoModule } from './provider-demo/provider-demo.module';
import { ProviderExportModule } from './provider-demo/provider.export.module';

@Module({
  imports: [ProviderDemoModule,ProviderExportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
