import { Injectable } from "@nestjs/common";
import { UpvotePostInput } from "../dto/post.dto";
import { Post } from "../graphqlSchema/posts";
import posts from "../mocks/posts-mock";

@Injectable()
export class PostsService {
    findAll(id: number): Post[] {
        return posts.filter(item=>item.id===id)
    }

    upvoteById(upvotePostInput: UpvotePostInput): Post{
        const data = posts.find(item=>item.id===upvotePostInput.id)
        data.votes = upvotePostInput.votes
        return data
    }
}