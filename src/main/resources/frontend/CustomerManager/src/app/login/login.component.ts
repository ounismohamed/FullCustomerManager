import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/userService";
import {User} from "../models/user";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title:string;
  signInButton : string;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private users : UserService) {
  }

  ngOnInit() {
    this.initForm();
    if (location.href.toString().includes('users')) {
      this.title="New User";
      this.signInButton="add";
    }else{

      this.title="Authentication";
      this.signInButton='sign In';
    }
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (location.href.toString().includes('users')) {
      this.users.addUser(new User(this.loginForm.value.username,
        this.loginForm.value.password,[]));
      this.loginForm.controls.username.setValue('');
      this.loginForm.controls.password.setValue('');
    }
    else {
      this.users.login(this.loginForm.value.username,this.loginForm.value.password);
    }
  }

}
