import { Injectable } from "@nestjs/common";


@Injectable()
export class UseExistingService {
	constructor() {}

	getUseExist() {
		return '这是别名提供者'
	}
}