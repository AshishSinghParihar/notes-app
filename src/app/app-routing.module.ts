import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './modules/authentication/component/sign-up/sign-up.component';
import { LoginComponent } from './modules/authentication/component/login/login.component';

const routes: Routes = [
  { path: '', component: SignUpComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
