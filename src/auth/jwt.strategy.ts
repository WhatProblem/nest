import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";



@Injectable()
/* 自定义策略名称 */
export class JwtStrategy extends PassportStrategy(Strategy,'myJwt') {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			// jwtFromRequest: ExtractJwt.fromAuthHeader,
			ignoreExpiration: false,
			secretOrKey: jwtConstants.sceret
		})
	}

	/* 可在此方法中查询数据库用户信息 比对token解码信息是否正确 */
	async validate(payload: any) {
		console.log('***************')
		console.log(payload)
		return { userId: payload.sub, username: payload.username }
	}
}