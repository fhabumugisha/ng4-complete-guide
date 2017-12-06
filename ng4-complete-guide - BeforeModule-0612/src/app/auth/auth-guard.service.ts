import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean  {
    if (this.authService.isAuthenticated()) {
        return true;
    }else {
      this.router.navigate(['/signin']);
      return false;
    }
  }



}
