import { Module } from "@nestjs/common";
import { InterceptorDemoController } from "./interceptor-demo.controller";




@Module({
    imports: [],
    providers: [],
    controllers: [InterceptorDemoController]
})
export class InterceptorDemoModule {

}