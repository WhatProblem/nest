import { Body, Controller, Get, Param, Post, Query, SetMetadata, UseGuards } from "@nestjs/common";
import { CreateDto } from "src/pipe-demo/create.dto";
import { RolesReflectGuard } from "./roles-reflect.guard";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles.guard";


/* 由守卫引发的任何异常都将由异常层(全局异常过滤器和应用于当前上下文的任何异常过滤器)处理。 */

@Controller('guard')
export class GuardDemoController {
	constructor() { }

	/* 普通守卫 */
	@Get('data')
	@UseGuards(RolesGuard) // 可通过逗号分隔进行传递多个守卫
	getData(@Query() query) {
		return {data: query, mes: '守卫'}
	}

	/* 通过反射器自定义守卫 */
	@Post('reflect')

	// @SetMetadata('roles', ['admin'])
	// @UseGuards(RolesReflectGuard)

	@Roles('admin')
	async create(@Body() createDto: CreateDto) {
		return {msg: '自定义守卫', data: createDto}
	}
}