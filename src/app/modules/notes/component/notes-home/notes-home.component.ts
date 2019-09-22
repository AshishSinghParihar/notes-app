import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/services/utility/utility.service';
import { RouterEnum, UserEnum, NotesTypeEnum, NotesModelEnum } from 'src/app/enums/notes-app.enum';
import { Router } from '@angular/router';
import { TextNotes } from 'src/app/models/notes.model';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss']
})
export class NotesHomeComponent implements OnInit {
  UserEnum = UserEnum;
  NotesTypeEnum = NotesTypeEnum;
  NotesModelEnum = NotesModelEnum;

  constructor(private router: Router, public utilityService: UtilityService) {}

  ngOnInit() {}

  onLogout() {
    this.router.navigate([RouterEnum.HOME]);
  }

  createNote(noteType: string) {
    let note;
    switch (noteType) {
      case NotesTypeEnum.TEXT: {
        note = new TextNotes();
        break;
      }
    }

    this.utilityService.createNotes(note);
  }
}
