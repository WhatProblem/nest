import { Controller, Post, Body, Get, UseInterceptors, Param, Delete, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductCreateDto } from "./product-create.dto";
import { Product } from "./entity/product";
import { TransformInterceptor } from "src/interceptor-demo/transform.interceptor";
import { ProductUpdateDto } from "./product-update.dto";

@Controller('product')
@UseInterceptors(TransformInterceptor)
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get('test')
	getData() {
		return {code: 200, msg: 'success'}
	}

	@Post('save')
	async create(@Body() productCreateDto: ProductCreateDto): Promise<Product> {
		return this.productService.create(productCreateDto)
	}

	@Get('all')
	async findAll():Promise<Product[]> {
		return this.productService.findAll()
	}

	@Get('list')
	async findList(): Promise<[Product[], number]> {
		return this.productService.findList()
	}

	@Get(':id')
	async findOne(@Param() id: number): Promise<Product> {
		return this.productService.findOne(id)
	}

	@Delete(':id')
	async remove(@Param('id') id: number): Promise<void> {
		return this.productService.remove(id)
	}

	@Put('update')
	async update(@Body() productUpdateDto: ProductUpdateDto):Promise<void> {
		return this.productService.update(productUpdateDto)
	}
}