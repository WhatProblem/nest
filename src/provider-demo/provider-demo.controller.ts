import { Controller, Get, Inject } from "@nestjs/common";
import { UniverseService } from "./universe.service";



@Controller('provider-demo')
export class ProviderDemoController {
	constructor(
		private universeService: UniverseService,
		@Inject('MockService') private mockService,
		@Inject('ClassService') private classService,
		@Inject('FactoryService') private factoryService,
		@Inject('UseExisting') private useExisting,
	) {}
	
	@Get()
	getData() {
		return {msg: 'success', data: null, controller: 'provider-demo'}
	}

	/* 标准提供者 */
	@Get('universe')
	getUniverse() {
		return this.universeService.getUniverseProvider()
	}

	/* 值提供者 */
	@Get('value')
	getValue() {
		return this.mockService
	}

	/* 类提供者 */
	@Get('class')
	getClass() {
		return this.classService.getClass()
	}

	/* 工厂提供者 */
	@Get('factory')
	getFactoryProvider() {
		return this.factoryService
	}

	/* 别名提供者 */
	@Get('useExisting')
	getUseExisting() {
		return this.useExisting.getUseExist()
	}
}