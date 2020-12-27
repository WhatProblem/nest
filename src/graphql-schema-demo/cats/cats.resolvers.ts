import { ParseIntPipe } from "@nestjs/common";
import { Args, Int, Mutation, Parent, Query, ResolveProperty, Resolver, Subscription } from "@nestjs/graphql";
import { Cat, CreateCatInput } from "../graphql-schema/graphql.schema";
import { CatsService } from "./cats.service";
import { PubSub } from 'graphql-subscriptions';
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsChildService } from "./cats-child.service";

const pubSub = new PubSub()

// @Resolver('Cat')
@Resolver()
export class CatsResolvers {
  constructor(
    private readonly catsService: CatsService,
    private readonly catsChildService: CatsChildService
  ) {}

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

  // @Query('catsChild')
  // async getCatsChild(@Args('id', ParseIntPipe) id: number) {
  //   return this.catsChildService.getChild(id)
  // }

  @Query()
  async catsChild(@Args('id', ParseIntPipe) id: number) {
    return this.catsChildService.getChild(id)
  }

  @ResolveProperty('children')
  async getChildren(@Parent() catsChild) {
    console.log(123)
    const mock = [
      {id: 1, name: 'ceshi1'},
      {id: 2, name: 'ceshi2'},
      {id: 3, name: 'ceshi3'},
    ]
    console.log(catsChild)
    const {id} = catsChild
    return mock.filter(item=>item.id===id)
  }
}
