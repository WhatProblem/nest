import { HttpException, HttpStatus } from "@nestjs/common";


export class ForbiddenException extends HttpException {
    constructor() {
        super('通过继承Forbidden', HttpStatus.FORBIDDEN);
    }
}