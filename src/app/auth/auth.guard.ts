import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      // take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        this.router.navigate(['auth']);
        return false;
      })
    );
  }
}
function take(
  arg0: number
): import('rxjs').OperatorFunction<import('./user.model').User, unknown> {
  throw new Error('Function not implemented.');
}
