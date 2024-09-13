import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = sessionStorage.getItem("appToken");
    // let clonedReq = request;
    // if (token) {
    //   clonedReq = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    //   return next.handle(clonedReq);
    // }
    // return next.handle(request);
    console.log('Request:', request);
    // return next.handle(request);
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('Response:', event);
          }
        },
        error => {
          console.error('Error:', error);
        }
      )
    );
  }
}