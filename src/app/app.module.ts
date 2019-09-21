import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    AuthenticationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MaterialComponentsModule, SharedModule]
})
export class AppModule {}
