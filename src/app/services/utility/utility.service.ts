import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { FormControl } from '@angular/forms';
import {
  ReactiveFormValidatorsEnum,
  ErrorMessagesEnum
} from 'src/app/enums/notes-app.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  registeredUsers: User[] = [];

  constructor() {}

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
}
