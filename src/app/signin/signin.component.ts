import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
  prepareSignInModel() {
    const formModel = this.signInFormGroup.value;
    const signIn = {
      username: formModel.username,
      password: formModel.password
    };

    return signIn;
  }
}
