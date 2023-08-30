import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-or-login',
  templateUrl: './signup-or-login.component.html',
  styleUrls: ['./signup-or-login.component.scss'],
})
export class SignupOrLoginComponent implements OnInit {

  isAllowPass = false;

  loginData: any = {};

  passwordVisible = false;

  form!: FormGroup;
  formSubmtted: boolean = false;

  registerTab = "signIn";

  @ViewChild('showpassword') passwordInput!: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerTab = "signIn"
    this.validateForm();
  }
  get f() { return this.form.controls }

  validateForm() {
    this.form = this.formBuilder.group({
      email: [this.loginData.email, [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    this.formSubmtted = true;
    if (this.form.invalid) {
      return;
    }
    this.isAllowPass = !this.isAllowPass;
  }

  showPassword(e: any): void {
    e.stopPropagation();
    this.passwordVisible = true;
  }

  hidePassword(e: any): void {
    e.stopPropagation();
    this.passwordVisible = false;
  }
}
