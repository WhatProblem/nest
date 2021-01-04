import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpvotePostInput{
    @Field()
    @IsNotEmpty()
    id: number

    @Field()
    @IsNotEmpty()
    votes: number
}