import { Component, OnInit } from '@angular/core';
import { NotesParent } from '../notes-parent';
import { FormGroup, Validators } from '@angular/forms';
import { PatternEnum } from 'src/app/enums/notes-app.enum';

@Component({
  selector: 'app-link-notes',
  templateUrl: './link-notes.component.html',
  styleUrls: ['./link-notes.component.scss']
})
export class LinkNotesComponent extends NotesParent implements OnInit {
  linkNotesForm: FormGroup;
  // showURLContentFlag = false;

  ngOnInit() {
    this.linkNotesForm = this.initTextNotesForm();
  }

  initTextNotesForm() {
    return this.formBuilder.group({
      [this.NotesModelEnum.TITLE]: [this.notes[this.NotesModelEnum.TITLE]],
      [this.NotesModelEnum.LINK]: [this.notes[this.NotesModelEnum.LINK], [Validators.pattern(PatternEnum.URL_PATTERN)]]
    });
  }

  // showURLContent() {
  //   this.showURLContentFlag = true;
  // }

  updateNote() {
    if (
      this.linkNotesForm.dirty &&
      this.linkNotesForm.get(this.NotesModelEnum.TITLE).value === '' &&
      this.linkNotesForm.get(this.NotesModelEnum.LINK).value === ''
    ) {
      this.deleteNotes();
      return;
    }
    this.notes = Object.assign(this.notes, this.linkNotesForm.value);
  }
}
