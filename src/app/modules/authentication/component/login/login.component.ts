import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
import { UtilityService } from 'src/app/services/utility/utility.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.loginForm = this.formInitialize();
  }

  formInitialize() {
    return this.formBuilder.group({
      [UserEnum.USERNAME]: ['', [Validators.required]],
      [UserEnum.PASSWORD]: ['', [Validators.required]]
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
    console.log('login');
  }

  togglePasswordShow() {
    this.hidePassword = !this.hidePassword;
  }

  goToSignUpPage() {
    this.router.navigate([RouterEnum.HOME]);
  }
}
