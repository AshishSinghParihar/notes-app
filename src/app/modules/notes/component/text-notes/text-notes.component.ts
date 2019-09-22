import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NotesParent } from '../notes-parent';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss']
})
export class TextNotesComponent extends NotesParent implements OnInit {
  textNotesForm: FormGroup;

  ngOnInit() {
    this.textNotesForm = this.initTextNotesForm();
  }

  initTextNotesForm() {
    return this.formBuilder.group({
      [this.NotesModelEnum.TITLE]: [this.notes[this.NotesModelEnum.TITLE]],
      [this.NotesModelEnum.TEXT]: [this.notes[this.NotesModelEnum.TEXT]]
    });
  }

  updateNote() {
    if (
      this.textNotesForm.dirty &&
      this.textNotesForm.get(this.NotesModelEnum.TITLE).value === '' &&
      this.textNotesForm.get(this.NotesModelEnum.TEXT).value === ''
    ) {
      this.deleteNotes();
      return;
    }
    this.notes = Object.assign(this.notes, this.textNotesForm.value);
  }
}
