import { Module } from "@nestjs/common";
import { AuthorRsolver } from "./author.resolver";
import { CatsChildService } from "./cats-child.service";
import { CatsResolvers } from "./cats.resolvers";
import { CatsService } from "./cats.service";

@Module({
    providers: [CatsService, CatsChildService,CatsResolvers, AuthorRsolver]
})
export class CatsModule { }