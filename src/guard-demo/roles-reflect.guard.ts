import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";




@Injectable()
export class RolesReflectGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<string[]>('roles', context.getHandler())
		console.log(roles)
		if (!roles) return true
		const request = context.switchToHttp().getRequest()
		console.log('111111111111')
		console.log(request.user)
		console.log(request.body.user)
		const user = request.user
		return this.matchRoles(roles, user.roles)
	}

	matchRoles(roles, type): boolean {
		return true
	}
}