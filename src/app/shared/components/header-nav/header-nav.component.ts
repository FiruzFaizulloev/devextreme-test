import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../../../auth/models';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  user$: Observable<IUserData> = this.authService.userInfo$;

  logOut(): void {
    this.authService.logOut();
  }

  constructor(private authService: AuthService) { }
}
