import { UserEnum } from '../enums/notes-app.enum';

export class User {
  [UserEnum.USERNAME]: string;
  [UserEnum.PASSWORD]: string;
  [UserEnum.FIRST_NAME]: string;
  [UserEnum.LAST_NAME]: string;
  [UserEnum.DOB]: string;
  [UserEnum.CONTACT_NUMBER]: string;
  [UserEnum.EMAIL]: string;
}
