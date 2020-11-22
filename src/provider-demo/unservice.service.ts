/* 非服务提供者 */
const devConfig = {
	msg: '非服务提供者',
	data: null,
	env: 'development'
}

const prodConfig = {
	msg: '非服务提供者',
	data: null,
	env: 'product'
}
export function UnService() {
	return process.env.NODE_ENV === 'development' ? devConfig : prodConfig
}