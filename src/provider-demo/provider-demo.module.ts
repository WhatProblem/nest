import { Module } from "@nestjs/common";
import { ProviderDemoController } from "./provider-demo.controller";
import { UniverseService } from "./universe.service";
import { ClassService } from "./class.service";
import { factoryService, OptProvider } from "./factory.service";
import { UseExistingService } from "./useExisting.service";

/* 值提供者 */
const MockService = {
	info: '值提供者',
	data: null,
	msg: 'success'
}


@Module({
	imports: [],
	providers: [
		// 标准提供者
		UniverseService,
		// 值提供者
		{ provide: 'MockService', useValue: MockService },
		// 类提供者
		{ provide: 'ClassService', useClass: ClassService },
		// 工厂提供者【实例化过程中会被调用，返回工厂函数返回值】
		OptProvider,
		{ provide: 'FactoryService', useFactory: factoryService, inject: [OptProvider] },
		// 别名提供者
		UseExistingService,
		{ provide: 'UseExisting', useExisting: UseExistingService }
	],
	controllers: [
		ProviderDemoController
	]
})
export class ProviderDemoModule {

}