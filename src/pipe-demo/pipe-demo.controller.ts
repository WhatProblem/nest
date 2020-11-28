import { Controller, Post, Body, UsePipes, UseFilters, Get, Param } from "@nestjs/common";
import { CreateDto, ClassDto } from "./create.dto";
import { PipeDemoService } from "./pipe-demo.service";
import { JoiValidationPipe } from "./joi-validation.pipe";
import joiSchema from "./joi.schema";
import { AnyExceptionsFilter } from "src/exception-demo/any-exception.filter";
import { ClassValidationPipe } from "./class-validation.pipe";
import { ParseIntPipe } from "./parse-int.pipe";

// 可以是方法范围的、控制器范围的和全局范围
@Controller('pipe')
export class PipeDemoController {
	constructor(private pipeDemoService: PipeDemoService) { }

	/* 结构验证 */
	@Post('joi')
	@UsePipes(new JoiValidationPipe(joiSchema))
	@UseFilters(AnyExceptionsFilter) // 使用过滤器拦截错误
	async create(@Body() createDto: CreateDto) {
		return this.pipeDemoService.create(createDto)
	}

	/* 类验证 */
	@Post('class')
	// @UsePipes(ClassValidationPipe) // 方法范围的
	@UseFilters(AnyExceptionsFilter) // 使用过滤器拦截错误
	// 参数范围的
	async getClass(@Body(new ClassValidationPipe()) classDto: ClassDto) {
		return this.pipeDemoService.getClass(classDto)
	}

	/* 转换管道 */
	@Get(':id')
	@UsePipes(ParseIntPipe)
	async getTransform(@Param('id', new ParseIntPipe()) id) {
		return await this.pipeDemoService.getTransform(id)
	}
}