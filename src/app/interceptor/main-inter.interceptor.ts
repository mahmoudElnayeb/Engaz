import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const typeCodeUrl:string = 'https://jsonplaceholder.typicode.com/';
    const token:string=localStorage.getItem('inter');

    token?request =request.clone({headers:request.headers.set('Authorization' , `Bearer ${token}`)}):null;
    request.headers.has('Content-Type')?null:request=request.clone({headers:request.headers.set('Content-Type', 'application/json')})
   request= request.clone({url:typeCodeUrl+request.url})

    return next.handle(request);
  }
}
