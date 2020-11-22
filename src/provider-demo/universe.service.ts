import { Injectable } from "@nestjs/common";


@Injectable()
export class UniverseService {

	getUniverseProvider() {
		return '这是标准提供者'
	}
}