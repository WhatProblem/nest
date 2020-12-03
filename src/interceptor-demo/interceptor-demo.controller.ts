import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { ErrorsInterceptor } from "./exception.interceptor";
import { LoggingInterceptor } from "./logging.interceptor";
import { TransformInterceptor } from "./transform.interceptor";

/* 与守卫一样, 拦截器可以是控制器范围内的, 方法范围内的或者全局范围内的 */

@Controller('interceptor')
@UseInterceptors(LoggingInterceptor)
export class InterceptorDemoController {

    /* 延迟响应 */
    @Get('data')
    getData() {
        // return { code: 200, msg: 'success' }
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({ code: 200, msg: 'success' })
            }, 3000);
        })
    }

    /* 响应格式化 */
    @Post('transform')
    @UseInterceptors(TransformInterceptor)
    transformData(@Body() data: any) {
        return '转换响应数据格式统一'
        // return data
    }

    /* 异常映射 */
    @Post('error')
    @UseInterceptors(ErrorsInterceptor)
    getError() {
        throw new Error()
    }
}