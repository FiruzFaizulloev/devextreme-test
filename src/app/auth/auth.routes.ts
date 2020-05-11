import { Routes } from '@angular/router';
import { AnonymousUserGuard } from '../core/guards/anonymous-user.guard';

import { AuthContainerComponent } from './containers';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    canActivate: [AnonymousUserGuard]
  }
];
