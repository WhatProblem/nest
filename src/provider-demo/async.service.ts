import { resolve } from "path"

async function asyncProvider() {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			resolve('这是异步提供者')
		}, 100);
	})
}

export async function asyncService () {
	const opt = await asyncProvider()
	return opt
}