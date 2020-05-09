import { Routes } from '@angular/router';
import { AppPaths } from './app.paths';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: AppPaths.USERS,
    pathMatch: 'full'
  },
  {
    path: AppPaths.USERS,
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule),
  }
];
