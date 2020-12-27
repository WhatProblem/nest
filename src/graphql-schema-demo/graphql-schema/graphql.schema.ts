
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract hello(): string | Promise<string>;

    abstract catsChild(id: number): CatsChild | Promise<CatsChild>;

    abstract author(id: number): Author | Promise<Author>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export class Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export class Post {
    id: number;
    title: string;
    votes?: number;
}

export class CatsChild {
    id: number;
    name: string;
    children?: CatsChildren[];
}

export class CatsChildren {
    id: number;
    name: string;
}
