import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/models/user.model';
import { FormControl } from '@angular/forms';
import {
  ReactiveFormValidatorsEnum,
  ErrorMessagesEnum,
  UserEnum
} from 'src/app/enums/notes-app.enum';
import { Notes, TextNotes, ListNotes, List } from 'src/app/models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private registeredUsers: User[] = [];
  loggedInUser: User;

  constructor(private snackBar: MatSnackBar) {
    const user1 = new User();
    user1.username = 'asd';
    user1.password = 'asd';
    user1.firstName = 'Admin';
    user1.lastName = 'Singh';

    const notes = new TextNotes();
    notes.title = 'Notes 1';
    notes.text =
      'The Shiba Inu is the smallest of the six original and distinct.';
    notes.creationDate = new Date();
    user1.notesList.push(notes);

    const notes3 = new ListNotes();
    notes3.title = 'Notes 2';
    const list1 = new List();
    list1.uncheckedList = ['Item1', 'Item 2'];
    list1.checkedList = ['Item3', 'Item 4'];
    notes3.list = list1;
    user1.notesList.push(notes3);
    this.registerUser(user1);
    this.loggedInUser = user1;
  }

  getFormControlRequiredErrorMessage(
    controlLabel: string,
    formControl: FormControl
  ) {
    let errorMsg = '';
    if (formControl.hasError(ReactiveFormValidatorsEnum.REQUIRED)) {
      errorMsg = controlLabel + ErrorMessagesEnum.REQUIRED_ERROR_SUFFIX;
    }
    return errorMsg;
  }

  getAllRegisteredUsers() {
    return this.registeredUsers;
  }

  registerUser(userDetails: User) {
    const user: User = Object.assign(new User(), userDetails);
    this.registeredUsers.push(user);
  }

  verifyUser(username: string, password: string): User[] {
    return this.registeredUsers.filter(
      (user: User) =>
        user[UserEnum.USERNAME] === username &&
        user[UserEnum.PASSWORD] === password
    );
  }

  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

  deleteNotes(index: number) {
    this.loggedInUser[UserEnum.NOTES_LIST].splice(index, 1);
    this.registeredUsers.forEach((user: User) => {
      if (user[UserEnum.USERNAME] === this.loggedInUser[UserEnum.USERNAME]) {
        user = this.loggedInUser;
      }
    });
    console.log(this.registeredUsers);
  }

  createNotes(note: Notes) {
    this.registeredUsers.forEach((user: User) => {
      if (user[UserEnum.USERNAME] === this.loggedInUser[UserEnum.USERNAME]) {
        user[UserEnum.NOTES_LIST].push(note);
      }
    });
    console.log(this.registeredUsers);
  }

  updateNote(note: Notes, index: number) {
    this.registeredUsers.forEach((user: User) => {
      if (user[UserEnum.USERNAME] === this.loggedInUser[UserEnum.USERNAME]) {
        user[UserEnum.NOTES_LIST][index] = note;
      }
    });
    console.log(this.registeredUsers);
  }

  openSnackBar(message: string, actionText: string, duration: number = 3) {
    return this.snackBar.open(message, actionText, {
      duration: duration * 1000
    });
  }
}
