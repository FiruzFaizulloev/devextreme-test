import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { AppPaths } from '../../app.paths';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticatedUserGuard implements CanLoad, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthenticatedUser();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.isAuthenticatedUser();
  }

  private isAuthenticatedUser(): boolean {
    if (this.userService.isAuthenticated()) {
      return true;
    }
    this.router.navigate([AppPaths.LOGIN]);
    return false;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }
}
