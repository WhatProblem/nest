import { Module } from "@nestjs/common";
import { RecipesResolver } from "./recipes.resolver";
import { RecipesService } from "./recipes.services";

@Module({
    imports: [],
    providers: [RecipesService, RecipesResolver]
})
export class RecipesModule { }