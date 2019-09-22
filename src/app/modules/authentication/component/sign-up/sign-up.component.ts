import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

import {
  UserEnum,
  RouterEnum,
  FieldLabelEnum,
  PatternEnum
} from '../../../../enums/notes-app.enum';
import { NotesAppPattern } from '../../../../patterns/custom-patters';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { NotesAppContants } from 'src/app/constants/notes-app.constant';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  UserEnum = UserEnum;
  FieldLabelEnum = FieldLabelEnum;
  numberOnly = new NotesAppPattern().numberOnly;
  signUpForm: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formInitialize();
  }

  formInitialize() {
    return this.formBuilder.group({
      [UserEnum.USERNAME]: [
        '',
        [
          Validators.required,
          Validators.pattern(
            PatternEnum.ALPHANUMERIC_WITHOUT_SPACE_N_SPECIAL_CHARS
          )
        ]
      ],
      [UserEnum.PASSWORD]: [
        '',
        [
          Validators.required,
          Validators.pattern(PatternEnum.ALPHANUMERIC_WITH_SPECIAL_CHARS)
        ]
      ],
      [UserEnum.FIRST_NAME]: ['', Validators.required],
      [UserEnum.LAST_NAME]: ['', Validators.required],
      [UserEnum.DOB]: [''],
      [UserEnum.CONTACT_NUMBER]: ['', Validators.pattern(PatternEnum.NUMERIC)],
      [UserEnum.EMAIL]: ['', Validators.email]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  getErrorMessage(controlLabel: string, controlName: string) {
    return this.utilityService.getFormControlRequiredErrorMessage(
      controlLabel,
      this.signUpForm.get(controlName) as FormControl
    );
  }

  resetSignUpForm() {
    this.signUpForm.reset();
  }

  goToLoginPage() {
    this.router.navigate([RouterEnum.LOGIN]);
  }

  onSignUp() {
    if (this.checkDuplicateUser().length === 1) {
      this.duplicateUserExists();
      return;
    }
    this.utilityService.registerUser(this.signUpForm.value);
    this.signUpForm.reset();
    const snackBarRef = this.utilityService.openSnackBar(
      NotesAppContants.SIGNUP_SUCCESS_MSG,
      'Login now',
      7
    );
    snackBarRef.onAction().subscribe(() => {
      this.goToLoginPage();
    });
  }

  checkDuplicateUser() {
    return this.utilityService
      .getAllRegisteredUsers()
      .filter(
        (user: User) =>
          user[UserEnum.USERNAME] === this.signUpForm.value[UserEnum.USERNAME]
      );
  }

  duplicateUserExists() {
    this.utilityService.openSnackBar(
      NotesAppContants.DUPLICATE_USER_EXISTS_MSG,
      'Okay',
      4
    );
  }
}
