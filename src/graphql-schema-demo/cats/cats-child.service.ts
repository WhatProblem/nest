import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsChildService {
	private readonly dataList = [
		{ id: 1, name: '测试1'},
		{ id: 2, name: '测试2'},
		{ id: 3, name: '测试3'},
		{ id: 4, name: '测试4'},
		{ id: 5, name: '测试5'},
		{ id: 6, name: '测试6'},
		{ id: 7, name: '测试7'},
		{ id: 8, name: '测试8'},
		{ id: 9, name: '测试9'},
	]

	getChild(id: number) {
		return this.dataList.find(item=>item.id===id)
	}
}