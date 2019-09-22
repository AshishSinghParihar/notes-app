import {
  UserEnum,
  RouterEnum,
  NotesModelEnum,
  NotesTypeEnum
} from 'src/app/enums/notes-app.enum';
import { FormBuilder } from '@angular/forms';
import { Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

export class NotesParent {
  UserEnum = UserEnum;
  NotesModelEnum = NotesModelEnum;

  @Input() index: number;

  constructor(
    protected formBuilder: FormBuilder,
    protected utilityService: UtilityService
  ) {}

  deleteNotes() {
    this.utilityService.deleteNotes(this.index);
  }
}
