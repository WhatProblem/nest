import { ParseIntPipe } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { Cat, CreateCatInput } from "../graphql-schema/graphql.schema";
import { CatsService } from "./cats.service";
import { PubSub } from 'graphql-subscriptions';
import { CreateCatDto } from "./dto/create-cat.dto";

const pubSub = new PubSub()

@Resolver('Cat')
export class CatsResolvers {
  constructor(private readonly catsService: CatsService) {}

  @Query()
  hello() {
    return 'hello world'
  }

  @Query()
  async getCats() {
    return this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Cat> {
    return this.catsService.findOneById(id);
  }

  @Mutation('createCat')
  async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    console.log('************创建一次数据***********')
    return pubSub.asyncIterator('catCreated');
  }
}
