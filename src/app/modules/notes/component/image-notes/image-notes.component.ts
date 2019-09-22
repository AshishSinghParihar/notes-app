import { Component, OnInit } from '@angular/core';
import { NotesParent } from '../notes-parent';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-notes',
  templateUrl: './image-notes.component.html',
  styleUrls: ['./image-notes.component.scss']
})
export class ImageNotesComponent extends NotesParent implements OnInit {
  imageNotesForm: FormGroup;
  showImageContentFlag = false;

  ngOnInit() {
    this.imageNotesForm = this.initTextNotesForm();
    if (
      this.imageNotesForm.get(this.NotesModelEnum.IMAGE_BASE64).value !== ''
    ) {
      this.showImageContent();
    }
  }

  initTextNotesForm() {
    return this.formBuilder.group({
      [this.NotesModelEnum.TITLE]: [this.notes[this.NotesModelEnum.TITLE]],
      [this.NotesModelEnum.FILE_NAME]: [
        this.notes[this.NotesModelEnum.FILE_NAME]
      ],
      [this.NotesModelEnum.IMAGE_BASE64]: [
        this.notes[this.NotesModelEnum.IMAGE_BASE64]
      ]
    });
  }

  getLabelText() {
    const value = this.imageNotesForm.get(this.NotesModelEnum.FILE_NAME).value;
    return value === '' ? 'Choose file' : value;
  }

  processSelectedFile(event: any): void {
    this.readFile(event.target);
    this.showImageContent();
  }

  readFile(inputValue: any): void {
    const file: File = inputValue.files[0];
    this.imageNotesForm.get(this.NotesModelEnum.FILE_NAME).setValue(file.name);
    const myReader: FileReader = new FileReader();

    myReader.onloadend = e => {
      this.imageNotesForm
        .get(this.NotesModelEnum.IMAGE_BASE64)
        .setValue(myReader.result);
    };
    myReader.readAsDataURL(file);
  }

  showImageContent() {
    this.showImageContentFlag = true;
  }

  updateNote() {
    if (
      this.imageNotesForm.dirty &&
      this.imageNotesForm.get(this.NotesModelEnum.TITLE).value === '' &&
      this.imageNotesForm.get(this.NotesModelEnum.IMAGE_BASE64).value === ''
    ) {
      this.deleteNotes();
      return;
    }
    this.notes = Object.assign(this.notes, this.imageNotesForm.value);
  }
}
