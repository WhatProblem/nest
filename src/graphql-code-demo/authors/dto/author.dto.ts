import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsNotEmpty, Min } from "class-validator";

@ArgsType()
export class AuthorDto {
    @Field(type=>Int)
    @IsNotEmpty()
    @Min(0)
    pageIndex
}