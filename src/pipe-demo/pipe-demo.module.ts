import { Module } from "@nestjs/common";
import { PipeDemoController } from "./pipe-demo.controller";
import { PipeDemoService } from "./pipe-demo.service";



@Module({
    imports: [],
    controllers: [PipeDemoController],
    providers: [PipeDemoService]
})
export class PipeDemoModule {

}