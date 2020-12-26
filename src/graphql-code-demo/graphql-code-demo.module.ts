import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { RecipesModule } from "./recipes/recipes.module";

@Module({
	imports: [
		RecipesModule,
		GraphQLModule.forRoot({
			installSubscriptionHandlers: true,
			// autoSchemaFile: 'src/graphql-code-demo/schema.gql'
			autoSchemaFile: join(process.cwd(), 'src/graphql-code-demo/schema.gql')
		})
	],
})
export class GraphqlCodeDemoModule { }