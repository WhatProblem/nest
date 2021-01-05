import { Exclude, Transform } from "class-transformer";
import { RoleEntity } from "./role.entity";

export class UserEntity {
    id: number;
    firstName: string;
    lastName: string;

    @Exclude()
    password: string

    @Transform(role => role.name)
    role: RoleEntity

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial)
    }
}