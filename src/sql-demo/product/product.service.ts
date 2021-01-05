import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entity/product";
import { Repository } from "typeorm";
import { ProductCreateDto } from "./product-create.dto";
import { ProductUpdateDto } from "./product-update.dto";

export interface ResList{
	data: Product[]
	total: number
}

// export type Resp = {
// 	data: Product[]
// 	total: number
// }

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product)
		private readonly productReposity: Repository<Product>
	) { }

	/* 新增 */
	create(productCreateDto: ProductCreateDto, type='create'): Promise<Product> {
		const productEntity = new Product()
		if (type === 'create') {
			productEntity.createdTime = new Date()
		}
		productEntity.uuid = `uuid-${new Date().getTime()}`
		productEntity.productCode = `${new Date().getTime()}`
		productEntity.productName = productCreateDto.productName
		productEntity.productPrice = productCreateDto.productPrice
		return this.productReposity.save(productEntity)
	}

	/* 查询数据 */
	async findAll():Promise<Product[]> {
		return this.productReposity.find()
	}

	/* 查询数据 + 数量 */
	async findList():Promise<[Product[], number]> {
		return this.productReposity.findAndCount()
	}

	/* 查询单条数据 */
	async findOne(id: number):Promise<Product> {
		return this.productReposity.findOne(id)
	}

	/* 删除指定数据 */
	async remove(id: number):Promise<void> {
		await this.productReposity.delete(id)
	}

	/* 修改数据 */
	async update(productUpdateDto: ProductUpdateDto):Promise<void> {
		const id = productUpdateDto.id
		delete productUpdateDto.id
		await this.productReposity.update(id, productUpdateDto)
	}
}