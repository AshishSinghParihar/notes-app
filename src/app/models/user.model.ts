import { UserEnum } from '../enums/notes-app.enum';
import { Notes } from './notes.model';

export class User {
  [UserEnum.USERNAME] = '';
  [UserEnum.PASSWORD] = '';
  [UserEnum.FIRST_NAME] = '';
  [UserEnum.LAST_NAME] = '';
  [UserEnum.DOB]: Date;
  [UserEnum.CONTACT_NUMBER] = '';
  [UserEnum.EMAIL] = '';
  [UserEnum.NOTES_LIST]: Notes[] = [];
}
