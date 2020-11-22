export class OptProvider {
	getOpt() {
		return {
			dbname: 'mydb',
			host: '127.0.0.1',
			pwd: '123456',
		}
	}
}


export function factoryService (optProvider: OptProvider) {
	const opt = optProvider.getOpt()
  return {data: opt, msg: '工厂提供者'}
}