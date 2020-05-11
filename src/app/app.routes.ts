import { Routes } from '@angular/router';
import { AppPaths } from './app.paths';
import { AnonymousUserGuard } from './core/guards/anonymous-user.guard';
import { AuthenticatedUserGuard } from './core/guards/authenticated-user.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: AppPaths.USERS,
    pathMatch: 'full'
  },
  {
    path: AppPaths.USERS,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canLoad: [AuthenticatedUserGuard]
  },
  {
    path: AppPaths.LOGIN,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [AnonymousUserGuard]
  },
];
