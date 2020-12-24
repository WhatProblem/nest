import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { CatsModule } from "./cats/cats.module";

@Module({
	imports: [
		CatsModule,
		GraphQLModule.forRoot(),
		// GraphQLModule.forRoot({
		// 	installSubscriptionHandlers: true
		// })
		// GraphQLModule.forRoot({
		// 	// 定义需要转译输出的graphql文件的目录位置
		// 	typePaths: ['./**/*.graphql'],
		// 	definitions: {
		// 		// 定义转译输出的graphql文件的目录位置
		// 		path: join(process.cwd(), 'src/graphql-demo/graphql-schema/graphql.schema.ts'),
		// 		// 输出为 class 类的形式 -- 默认为 interface 接口形式
		// 		outputAs: 'class'
		// 	},
		// 	installSubscriptionHandlers: true
		// })
	]
})
export class GraphqlDemoModule { }