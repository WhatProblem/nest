import { MaxLength, MinLength } from "class-validator";
import { Post } from "src/graphql-schema-demo/graphql-schema/graphql.schema";

export class CreatePostInput extends Post {
    @MinLength(2)
    @MaxLength(50)
    title: string
}