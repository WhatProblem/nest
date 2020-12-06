import { Injectable } from "@nestjs/common";

/* 类型别名 */
export type User = any


@Injectable()
export class UsersService {
	private readonly users: User[]
	constructor() {
		// 提供假数据（类似数据库用户数据）
		this.users = [
			{ userId: 1, username: 'john', password: 'changeme' },
			{ userId: 2, username: 'chris', password: 'secret' },
			{ userId: 3, username: 'maria', password: 'guess' },
		]
	}

	async findOne(usernaem: string): Promise<User | undefined> {
		return this.users.find(user => user.username === usernaem)
	}
}