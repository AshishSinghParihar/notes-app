import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NotesParent } from '../notes-parent';
import { NotesModelEnum } from 'src/app/enums/notes-app.enum';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent extends NotesParent implements OnInit {
  listNotesForm: FormGroup;

  ngOnInit() {
    this.listNotesForm = this.initListNotesForm();
  }

  initListNotesForm() {
    return this.formBuilder.group({
      [this.NotesModelEnum.TITLE]: [this.notes[this.NotesModelEnum.TITLE]],
      [this.NotesModelEnum.CHECKED_LIST]: [
        this.notes[this.NotesModelEnum.LIST][this.NotesModelEnum.CHECKED_LIST]
      ],
      [this.NotesModelEnum.UNCHECKED_LIST]: [
        this.notes[this.NotesModelEnum.LIST][this.NotesModelEnum.UNCHECKED_LIST]
      ]
    });
  }

  addNewItem(event: any) {
    const value = event.target.value;
    if (value === '') {
      return;
    }
    const uncheckedList = this.listNotesForm.controls[
      NotesModelEnum.UNCHECKED_LIST
    ].value;
    uncheckedList.push(value);
    this.listNotesForm.controls[NotesModelEnum.UNCHECKED_LIST].setValue(
      uncheckedList
    );
    event.target.value = '';
    this.updateNote();
  }

  removeListItem(listName: string, index: number) {
    this.listNotesForm.controls[listName].value.splice(index, 1);
    if (
      this.listNotesForm.get(NotesModelEnum.UNCHECKED_LIST).value.length ===
        0 &&
      this.listNotesForm.get(NotesModelEnum.CHECKED_LIST).value.length === 0
    ) {
      this.deleteNotes();
    }
  }

  sendToCheckedList(index: number) {
    const listItem = this.notes[NotesModelEnum.LIST][
      NotesModelEnum.UNCHECKED_LIST
    ].splice(index, 1);
    this.notes[NotesModelEnum.LIST][NotesModelEnum.CHECKED_LIST].push(
      listItem[0]
    );
    this.updateNote();
  }

  sendToUncheckedList(index: number) {
    const listItem = this.notes[NotesModelEnum.LIST][
      NotesModelEnum.CHECKED_LIST
    ].splice(index, 1);
    this.notes[NotesModelEnum.LIST][NotesModelEnum.UNCHECKED_LIST].push(
      listItem[0]
    );
    this.updateNote();
  }

  updateNote() {
    this.notes[NotesModelEnum.CREATION_DATE] = new Date();
    this.notes[NotesModelEnum.TITLE] = this.listNotesForm.value[
      NotesModelEnum.TITLE
    ];
    this.notes[NotesModelEnum.LIST][
      NotesModelEnum.UNCHECKED_LIST
    ] = this.listNotesForm.value[NotesModelEnum.UNCHECKED_LIST];
    this.notes[NotesModelEnum.LIST][
      NotesModelEnum.CHECKED_LIST
    ] = this.listNotesForm.value[NotesModelEnum.CHECKED_LIST];
  }
}
