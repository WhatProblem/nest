import { Module } from "@nestjs/common";
import { GuardDemoController } from "./guard-demo.controller";




@Module({
	imports: [],
	controllers: [GuardDemoController],
	providers: []
})
export class GuardDemoModule { }