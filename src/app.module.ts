import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExceptionDemoModule } from './exception-demo/exception-demo.module';
import { MiddleDemoModule } from './middle-demo/middle-demo.module';
import { ProviderDemoModule } from './provider-demo/provider-demo.module';
import { ProviderExportModule } from './provider-demo/provider.export.module';
import { PipeDemoModule } from './pipe-demo/pipe-demo.module';
import { GuardDemoModule } from './guard-demo/guard-demo.module';
import { InterceptorDemoModule } from './interceptor-demo/interceptor-demo.module';
import { AuthModule } from './auth/auth.module';
import { SqlModule } from './sql-demo/sql.module';
import { GraphqlSchemaDemoModule } from './graphql-schema-demo/graphql-schema-demo.module';
import { GraphqlCodeDemoModule } from './graphql-code-demo/graphql-code-demo.module';
import { SerializerDemoModule } from './serializer-demo/serializer-demo.module';

@Module({
  imports: [
    // 提供者 provider
    ProviderDemoModule,
    ProviderExportModule,
    // 中间件 middle
    MiddleDemoModule,
    // 异常过滤器
    ExceptionDemoModule,
    // 管道
    PipeDemoModule,
    // 守卫
    GuardDemoModule,
    // 拦截器
    InterceptorDemoModule,
    // 鉴权认证
    AuthModule,
    // 数据库
    SqlModule,
    // graphql 应用 模式优先
    // GraphqlSchemaDemoModule,
    // graphql 应用 代码优先
    // GraphqlCodeDemoModule,
    // serializer 序列化返回数据，脱敏关键字段
    SerializerDemoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
