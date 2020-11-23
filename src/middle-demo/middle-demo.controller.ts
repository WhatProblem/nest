import { Controller, Get } from "@nestjs/common";


@Controller('middle')
export class MiddleDemoController {
	constructor() {}

	@Get()
	getData() {
		return '中间件测试'
	}
	
	/* 类中间件 */
	@Get('class')
	getMiddleClass() {
		return {data: '这是类中间件返回数据', msg: 'success'}
	}

	/* 函数中间件 */
	@Get('fn')
	getMiddleFn() {
		return {data: '这是函数中间件返回数据', msg: 'success'}
	}

	/* 多个中间件 */
	@Get('multiMiddle')
	getMultiMiddle() {
		return {data: '这是多个中间件返回数据', msg: 'success'}
	}

	/* 排除中间件 */
	@Get('exclude')
	getExclude() {
		return {data: '这是使用 exclude 中间件返回数据', msg: 'success'}
	}
}