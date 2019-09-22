import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
import { UtilityService } from 'src/app/services/utility/utility.service';
import { NotesAppContants } from 'src/app/constants/notes-app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserEnum = UserEnum;
  FieldLabelEnum = FieldLabelEnum;
  loginForm: FormGroup;
  hidePassword = true;
  invalidCredentials = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.loginForm = this.formInitialize();
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
      ]
    });
  }

  getErrorMessage(controlLabel: string, controlName: string) {
    return this.utilityService.getFormControlRequiredErrorMessage(
      controlLabel,
      this.loginForm.get(controlName) as FormControl
    );
  }

  resetLoginForm() {
    this.loginForm.reset();
  }

  onLogin() {
    const username = this.loginForm.controls[UserEnum.USERNAME].value;
    const password = this.loginForm.controls[UserEnum.PASSWORD].value;
    const user = this.utilityService.verifyUser(username, password);
    if (user.length === 0) {
      const snackBarRef = this.utilityService.openSnackBar(
        NotesAppContants.INVALID_CREDENTIALS_MSG,
        'Okay',
        5
      );
      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });
    } else {
      this.utilityService.isLoggedin = true;
      this.utilityService.setLoggedInUser(user[0]);
      this.router.navigate([RouterEnum.NOTES + '/' + username]);
    }
  }

  togglePasswordShow() {
    this.hidePassword = !this.hidePassword;
  }

  goToSignUpPage() {
    this.router.navigate([RouterEnum.HOME]);
  }
}
