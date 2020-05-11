import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { IUserData } from '../../models';
import { AppPaths } from '../../../app.paths';

@Component({
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthContainerComponent {

  errorMessages: string[];

  login(loginData: IUserData) {
    this.authService
      .login(loginData)
      .pipe(first())
      .subscribe((response: IUserData) => {
        this.authService.saveUser(response);
        this.router.navigate([AppPaths.USERS]);
      }, (err: string[]) => this.errorMessages = err);
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
}
