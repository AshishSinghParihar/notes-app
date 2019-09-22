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
  FieldLabelEnum
} from '../../../../enums/notes-app.enum';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { NotesAppContants } from 'src/app/constants/notes-app.constant';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  UserEnum = UserEnum;
  FieldLabelEnum = FieldLabelEnum;
  signUpForm: FormGroup;
  hidePassword = true;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

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
      [UserEnum.USERNAME]: ['', Validators.required],
      [UserEnum.PASSWORD]: ['', Validators.required],
      [UserEnum.FIRST_NAME]: ['', Validators.required],
      [UserEnum.LAST_NAME]: ['', Validators.required],
      [UserEnum.DOB]: [''],
      [UserEnum.CONTACT_NUMBER]: [''],
      [UserEnum.EMAIL]: ['']
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
    console.log('users', this.utilityService.getAllRegisteredUsers());
  }
}
