import { Module } from "@nestjs/common";
import { ProviderDemoController } from "./provider-demo.controller";
import { UniverseService } from "./universe.service";
import { ClassService } from "./class.service";
import { factoryService, OptProvider } from "./factory.service";
import { UseExistingService } from "./useExisting.service";
import { UnService } from "./unservice.service";

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
		{ provide: 'UseExisting', useExisting: UseExistingService },
		// 非服务提供者
		{ provide: 'UnService', useFactory: UnService }
	],
	controllers: [
		ProviderDemoController
	],
	exports: [
		// 导出自定义提供着
		// 'FactoryService'
		// 完整的导入
		{ provide: 'FactoryService', useFactory: factoryService, inject: [OptProvider] },
	]
})
export class ProviderDemoModule {

}