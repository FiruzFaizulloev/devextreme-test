import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

import { USER_ROUTES } from './user.routes';
import { HeaderNavModule } from '../shared';

import { UserContainerComponent } from './containers';
import {
  UsersComponent,
  TodosComponent
} from './components';

@NgModule({
  declarations: [
    UserContainerComponent,
    UsersComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
    DxDataGridModule,
    HeaderNavModule
  ]
})
export class UserModule { }
