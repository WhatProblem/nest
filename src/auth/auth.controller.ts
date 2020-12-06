import { Controller, Post, Body, UseGuards, Get, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	
	// @UseGuards(AuthGuard('local'))
	@UseGuards(AuthGuard('myJwt'))
	@Post('login')
	async login(@Body() req) {
		// console.log(req)
		// return req
		// 登陆成功返回token
		return this.authService.login(req)
	}

	@Get()
	getData() {
		return {code: 200, msg: 'success'}
	}

	@UseGuards(AuthGuard('myJwt'))
	@Get('profile')
	getProfile(@Request() req) {
		console.log(req.headers)
		return req.headers
	}
}