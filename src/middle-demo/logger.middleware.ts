import { Injectable, NestMiddleware } from "@nestjs/common";


/* 类中间件 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
		console.log('类中间件。。。')
		next()
	}
}

/* 函数中间件 */
export function logger(req, res, next) {
	console.log('函数中间件。。。')
	next()
}