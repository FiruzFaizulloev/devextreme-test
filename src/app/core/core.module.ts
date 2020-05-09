import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderNavModule } from '../shared';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderNavModule
  ],
  providers: [
    UserService
  ],
  exports: [
    HeaderNavModule
  ]
})

export class CoreModule {
}
