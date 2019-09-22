import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesHomeComponent } from './component/notes-home/notes-home.component';
import { TextNotesComponent } from './component/text-notes/text-notes.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNotesComponent } from './component/list-notes/list-notes.component';
import { LinkNotesComponent } from './component/link-notes/link-notes.component';

@NgModule({
  declarations: [NotesHomeComponent, TextNotesComponent, ListNotesComponent, LinkNotesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    MaterialComponentsModule
  ]
})
export class NotesModule { }
