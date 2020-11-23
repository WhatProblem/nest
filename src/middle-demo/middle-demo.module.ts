import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { logger, LoggerMiddleware } from "./logger.middleware";
import { MiddleDemoController } from "./middle-demo.controller";


@Module({
	imports: [],
	controllers: [
		MiddleDemoController
	],
	providers: []
})
export class MiddleDemoModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		/* 类中间件 */
		consumer.apply(LoggerMiddleware).forRoutes('middle/class')
		/* 函数中间件 */
		consumer.apply(logger).forRoutes('middle/fn')
		/* 多个中间件 */
		consumer.apply(LoggerMiddleware, logger).forRoutes('middle/multiMiddle')
		/* exclude 排除中间件（函数中间件不能使用） */
		consumer.apply(LoggerMiddleware).exclude({path: 'middle/exclude', method: RequestMethod.GET}).forRoutes(MiddleDemoController)
	}
}