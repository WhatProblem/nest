import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

/**
 * @Note 本地策略 passport-local
 * 根据用户输入用户名密码验证用户是否存在
 * 配置验证账号登录 发放token
 */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super()
	}

	/* 需要实现passport的validate方法 */
	async validate(username: string, password: string): Promise<any> {
		const user = await this.authService.validateUser(username, password)
		if (!user) throw new UnauthorizedException()
		return user
	}
}