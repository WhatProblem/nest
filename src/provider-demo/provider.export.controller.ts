import { Controller, Get, Inject } from "@nestjs/common";



@Controller('provider-export')
export class ProviderExportController {
	constructor(
		@Inject('FactoryService') private factoryService,
	) {}
	
	@Get('export')
	getProviderExport() {
		return '这是自定义导入提供者'
	}

	/* 工厂提供者 */
	@Get('factory')
	getFactoryProvider() {
		return {...this.factoryService, msg: '导出自定义提供者'}
	}
}