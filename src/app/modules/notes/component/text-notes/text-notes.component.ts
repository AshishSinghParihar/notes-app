import { Component, OnInit, Input } from '@angular/core';
import { TextNotes } from 'src/app/models/notes.model';
import { NotesParent } from '../notes-parent';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss']
})
export class TextNotesComponent extends NotesParent implements OnInit {
  textNotesForm: FormGroup;

  @Input() notes: TextNotes;

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
    const note = Object.assign(this.notes, this.textNotesForm.value);
    this.utilityService.updateNote(note, this.index);
  }
}
