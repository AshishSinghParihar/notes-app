import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesHomeComponent } from './component/notes-home/notes-home.component';

const routes: Routes = [
  { path: '', component: NotesHomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
