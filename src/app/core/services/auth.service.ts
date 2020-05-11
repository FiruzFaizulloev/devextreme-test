import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { IUserData } from '../../auth/models';
import { USER_DATA } from '../../content/auth-data.mock';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { PlatformService } from './platform.service';
import { AppPaths } from '../../app.paths';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  readonly errorMessages: any = {
    valueIsInvalid: 'Invalid password or email'
  };
  userInfo$: Observable<IUserData>;
  private userKey = 'user';

  login(userData: IUserData): Observable<IUserData | string[]> {
    const checkUser = this.checkUser(userData);

    if (checkUser) {
      return of(userData)
        .pipe(
          tap((user: IUserData) => {
            const token = user.email + user.password;
            this.tokenService.saveToken(token);
          })
        );
    }
    return throwError([this.errorMessages.valueIsInvalid]);
  }

  logOut(): void {
    this.tokenService.removeToken();
    this.router.navigate([AppPaths.LOGIN]);
  }

  saveUser(user: IUserData) {
    if (this.platformService.isBrowser()) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  private getUserInfo(): Observable<IUserData> {
    if (this.platformService.isBrowser()) {
      const user = localStorage.getItem(this.userKey);
      return of(JSON.parse(user || '{}'));
    }

    return EMPTY;
  }

  private checkUser(user: IUserData): boolean {
    const userData = USER_DATA;

    return user.email === userData.email &&
      user.password === userData.password;
  }

  constructor(
    private tokenService: TokenService,
    private platformService: PlatformService,
    private router: Router
  ) {
    this.userInfo$ = this.getUserInfo();
  }
}
