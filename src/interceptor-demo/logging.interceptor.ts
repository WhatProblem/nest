import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('开始...')
        const now = Date.now()
        return next.handle().pipe(
            tap(() => console.log(`之后... ${Date.now() - now}ms`))
        )
    }
}