import { Controller, Get, HttpException, HttpStatus, UseFilters } from "@nestjs/common";
import { ForbiddenException } from "./forbidden.exception";
import { HttpExceptionFilter } from "./http-exception.filter";
import { AnyExceptionsFilter } from "./any-exception.filter";
import { AllExceptionsFilter } from "./all-exceptions.filter";


@Controller('exception')
// @UseFilters(HttpExceptionFilter) // 整个controller设置过滤器
export class ExceptionDemoController {
	constructor() {}
	
	/* 普通异常 */
	@Get()
	getData() {
		throw new Error()
	}

	/* 自定义异常 */
	@Get('custom')
	@UseFilters(AllExceptionsFilter)
	getCustom() {
		throw new HttpException('forbidden', HttpStatus.FORBIDDEN)
	}

	/* 自定义响应信息 */
	@Get('customres')
	getCustomRes() {
		throw new HttpException({data: null, msg: 'fail', code: 200}, 200)
	}

	/* 继承的自定义异常 */
	@Get('extendsExcept')
	@UseFilters(AnyExceptionsFilter)
	getExtendsExcept() {
		throw new ForbiddenException()
	}

	/* 异常过滤器 */
	@Get('filter')
	@UseFilters(HttpExceptionFilter)
	getFilter() {
		throw new ForbiddenException()
	}
}