import { Injectable, NgZone } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGardGuard implements CanActivate {
  token = null;
  constructor(public router: Router, public ngZone: NgZone) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    this.token = localStorage.getItem('inter');

    if (this.token != "null") {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
