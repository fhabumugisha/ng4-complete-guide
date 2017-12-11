import { HttpInterceptor } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted', req);
    const token =  this.authService.getToken();
   const params = new HttpParams().set('auth', token);
    const myReq =  req.clone({
        params: req.params.set('auth', token)
    });
    return next.handle(myReq).do(
      event => {
          console.log('Logging interceptor ' , event);
      }
    );
  }
}
