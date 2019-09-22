import { FormBuilder } from '@angular/forms';

import {
  UserEnum,
  RouterEnum,
  NotesModelEnum,
  NotesTypeEnum
} from 'src/app/enums/notes-app.enum';
import { Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Notes } from 'src/app/models/notes.model';

export class NotesParent {
  UserEnum = UserEnum;
  NotesModelEnum = NotesModelEnum;

  @Input() index: number;

  @Input() notes: Notes;

  constructor(
    protected formBuilder: FormBuilder,
    protected utilityService: UtilityService
  ) {}

  deleteNotes() {
    this.utilityService.deleteNotes(this.index);
  }
}
