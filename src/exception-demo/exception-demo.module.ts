import { Module } from "@nestjs/common";
import { ExceptionDemoController } from "./exception-demo.controller";



@Module({
	imports: [],
	providers: [],
	controllers: [ExceptionDemoController]
})
export class ExceptionDemoModule {

}