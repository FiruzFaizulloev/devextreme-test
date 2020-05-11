import { Routes } from '@angular/router';
import { AuthenticatedUserGuard } from '../core/guards/authenticated-user.guard';
import { UserContainerComponent } from './containers';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    canActivate: [AuthenticatedUserGuard]
  }
];
