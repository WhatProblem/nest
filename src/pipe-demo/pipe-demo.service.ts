import { Injectable } from "@nestjs/common";



@Injectable()
export class PipeDemoService {

	create(dto) {
		return { msg: '结构验证', data: dto }
	}

	getClass(dto) {
		return { msg: '类验证', data: dto }
	}

	getTransform(dto) {
		return { msg: '转换管道', data: dto }
	}
}