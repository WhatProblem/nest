import { Module } from "@nestjs/common";
import { PostsModule } from "./posts.module";
import { AuthorResolver } from "./resolver/author.resolver";
import { AuthorsService } from "./service/author.service";

@Module({
    imports: [PostsModule],
    providers: [AuthorsService, AuthorResolver]
})
export class AuthorModule {}