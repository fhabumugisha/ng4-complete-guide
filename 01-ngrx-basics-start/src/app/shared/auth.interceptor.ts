import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private strore: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);

    return this.strore.select('auth')
    .take(1)
    .switchMap((authState: fromAuth.State ) => {
      const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
      return next.handle(copiedReq);
    });

    // return null;
  }
}
