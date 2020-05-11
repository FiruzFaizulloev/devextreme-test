import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';

import { AuthService } from '../core/services/auth.service';

import { AUTH_ROUTES } from './auth.routes';

import { LogInFormComponent } from './components';
import { AuthContainerComponent } from './containers';


@NgModule({
  declarations: [
    LogInFormComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    DxButtonModule,
    DxFormModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
