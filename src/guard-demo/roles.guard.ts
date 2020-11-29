import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";



@Injectable()
export class RolesGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		// console.log(context.getHandler()
		// console.log(context.getClass())
		// console.log(context.getArgs())
		// console.log('111111111111111')
		// console.log(context.switchToHttp())
		// console.log(context.switchToHttp().getRequest().query)
		// console.log(context.switchToHttp().getResponse())
		const req = context.switchToHttp().getRequest<Request>()

		return req.query.id === '001' ? true : false
	}
}