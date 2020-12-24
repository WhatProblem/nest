import { Min } from "class-validator";
import { CreateCatInput } from "src/graphql-demo/graphql-schema/graphql.schema";

export class CreateCatDto extends CreateCatInput {
    @Min(1)
    age: number
}