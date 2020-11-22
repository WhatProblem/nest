import { Injectable } from "@nestjs/common";


@Injectable()
export class ClassService {
	
	/* 类提供者 */
	getClass() {
		return '这是类提供者'
	}
}