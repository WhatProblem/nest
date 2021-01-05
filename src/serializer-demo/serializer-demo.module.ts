import { Module } from "@nestjs/common";
import { SerializerController } from "./serializer.controller";



@Module({
    controllers: [SerializerController]
})
export class SerializerDemoModule {}