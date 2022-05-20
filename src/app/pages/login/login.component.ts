import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../utils/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error?: string;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: () => this.router.navigate(['/secret']),
          error: err => this.error = err.toString()
        })
    }
  }


}
