import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "./posts"

@ObjectType()
export class Author {
    @Field()
    id: number

    @Field({ nullable: true })
    firstName?: string

    @Field({ nullable: true })
    lastName?: string

    @Field(type => [Post])
    posts: Post[]
}