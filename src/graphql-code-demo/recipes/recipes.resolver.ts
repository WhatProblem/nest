import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Resolver, Subscription, Query } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe } from "./models/recipe.model";
import { RecipesService } from "./recipes.services";

const pubSub = new PubSub()

@Resolver(of => Recipe)
export class RecipesResolver {
	constructor(private readonly recipesService: RecipesService) { }

	@Query(returns => Recipe)
	async recipe(@Args('id') id: string): Promise<Recipe> {
		const recipe = await this.recipesService.findOneById(id)
		if (!recipe) throw new NotFoundException(id)
		return recipe
	}   

	@Query(returns => [Recipe])
	recipes(@Args() recipesArgs: RecipesArgs) {
		return this.recipesService.findAll(recipesArgs)
	}

	@Mutation(returns => Boolean)
	async removeRecipe(@Args('id') id: string) {
		return this.recipesService.remove(id)
	}

	@Subscription(returns => Recipe)
	recipeAdded() {
		return pubSub.asyncIterator('recipeAdded')
	}
}