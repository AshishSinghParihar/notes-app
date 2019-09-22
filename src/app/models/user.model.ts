import { UserEnum } from '../enums/notes-app.enum';
import { Notes } from './notes.model';

export class User {
  [UserEnum.USERNAME]: string;
  [UserEnum.PASSWORD]: string;
  [UserEnum.FIRST_NAME]: string;
  [UserEnum.LAST_NAME]: string;
  [UserEnum.DOB]: string;
  [UserEnum.CONTACT_NUMBER]: string;
  [UserEnum.EMAIL]: string;
  [UserEnum.NOTES_LIST]: Notes[] = [];
}
