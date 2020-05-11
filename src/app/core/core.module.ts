import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { PlatformService } from './services/platform.service';
import { TokenService } from './services/token.service';

import { AnonymousUserGuard } from './guards/anonymous-user.guard';
import { AuthenticatedUserGuard } from './guards/authenticated-user.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PlatformService,
    TokenService,
    AnonymousUserGuard,
    AuthenticatedUserGuard
  ]
})

export class CoreModule {
}
