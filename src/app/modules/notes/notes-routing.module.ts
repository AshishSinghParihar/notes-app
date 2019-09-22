import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesHomeComponent } from './component/notes-home/notes-home.component';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: NotesHomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
