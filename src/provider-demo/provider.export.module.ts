import { Module } from "@nestjs/common";
import { ProviderExportController } from "./provider.export.controller";
import { ProviderDemoModule } from "./provider-demo.module";



@Module({
	imports: [
		ProviderDemoModule
	],
	controllers: [
		ProviderExportController
	],
	providers: []
})
export class ProviderExportModule {

}