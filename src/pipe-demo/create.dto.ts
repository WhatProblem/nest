import { IsString, IsInt } from "class-validator";

/* 管道参数结构验证 */
export class CreateDto {
	name: string
	age: number
	breed: string
}


/* 类验证器 */
export class ClassDto {
	@IsString()
	name: string

	@IsInt()
	age: number

	// @IsString()
	// age: string

	@IsString()
	breed: string
}