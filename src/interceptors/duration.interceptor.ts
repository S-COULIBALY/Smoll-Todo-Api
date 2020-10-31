import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class DurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //console.log('My first interceptor');
    const dateIn = Date.now();
    //console.log('request created At : ', dateIn);
    return next.handle().pipe(
      tap(() => {
        const dateOut = Date.now();
        //console.log('request end At : ', dateOut);
        //console.log(`Request duration : ${dateOut - dateIn} ms`);
      }),
    );
    return next.handle();
  }
}
