import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { RoleEntity } from "./entities/role.entity";
import { UserEntity } from "./entities/user.entity";

@Controller('serializer')
@UseInterceptors(ClassSerializerInterceptor)
export class SerializerController {
    @Get()
    findOne(): UserEntity {
        return new UserEntity({
            id: 1,
            firstName: 'Kamil',
            lastName: 'Mysliwiec',
            password: 'password',
            role: new RoleEntity({ id: 1, name: 'admin' })
        })
    }
}