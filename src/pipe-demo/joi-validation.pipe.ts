import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { ObjectSchema } from "@hapi/joi";


/* 创建结构验证管道 */
@Injectable()
export class JoiValidationPipe implements PipeTransform {
	constructor(private schema: ObjectSchema) { }

	transform(value: any, metadata: ArgumentMetadata) {
		const {error} = this.schema.validate(value)

		if (error) {
			throw new BadRequestException('validation failed: 请求失败，参数错误')
		}
		return value
	}
}