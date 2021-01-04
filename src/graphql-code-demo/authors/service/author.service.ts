import { Injectable } from "@nestjs/common";
import { Author } from "../graphqlSchema/author";
import { AuthorDto } from "../dto/author.dto";
import authors from "../mocks/author-mock";

@Injectable()
export class AuthorsService {
    authorList(authorDto: AuthorDto):Author[] {
        const data = authors.splice(0, 10)
        return [data[authorDto.pageIndex]]
    }

    findOne(id: number):Author {
        return authors.find(item=>item.id===id)
    }
}