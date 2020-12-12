import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "./product/product.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '',
			database: 'my_db',
			autoLoadEntities: true,
			synchronize: false, // true: 自动创建表
		}),
		ProductModule,
	],
	controllers: [],
	providers: []
})
export class SqlModule { }