import { Resolver, Query, Args, Mutation, ResolveProperty, Parent, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { AuthorDto } from "../dto/author.dto";
import { UpvotePostInput } from "../dto/post.dto";
import { Author } from "../graphqlSchema/author";
import { Post } from "../graphqlSchema/posts";
import { AuthorsService } from "../service/author.service";
import { PostsService } from "../service/posts.service";

const pubSub = new PubSub()

@Resolver(of => Author)
export class AuthorResolver {
    constructor(
        private readonly authorsService: AuthorsService,
        private readonly postsService: PostsService
    ) { }

    @Query(returns => [Author])
    authorList(@Args() authorArgs: AuthorDto): Author[] {
        return this.authorsService.authorList(authorArgs)
    }

    @Mutation(returns => Post)
    upvotePost(@Args('upvotePostData') upvotePostInput: UpvotePostInput) {
        const post = this.postsService.upvoteById(upvotePostInput)
        pubSub.publish('postupdated', { postupdated: post })
        return post
    }

    @Query(returns => Author)
    author(@Args('id') id: number): Author {
        return this.authorsService.findOne(id)
    }

    @ResolveProperty()
    posts(@Parent() author) {
        const {id} = author
        return this.postsService.findAll(id)
    }

    @Subscription(returns=>Post)
    postupdated() {
        return pubSub.asyncIterator('postupdated')
    }
}