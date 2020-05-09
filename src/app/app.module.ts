import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
