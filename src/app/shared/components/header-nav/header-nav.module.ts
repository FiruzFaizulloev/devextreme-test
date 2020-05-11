import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav.component';
import { DxButtonModule } from 'devextreme-angular';
import { AuthService } from '../../../core/services/auth.service';



@NgModule({
  declarations: [
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule
  ],
  exports: [
    HeaderNavComponent
  ],
  providers: [
    AuthService
  ]
})
export class HeaderNavModule { }
