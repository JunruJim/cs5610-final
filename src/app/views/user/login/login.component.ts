import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  errorFlag: Boolean = false;
  errorMsg: String = 'Invalid username or password!';

  // use Inject instead of import
  constructor(
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private router: Router
  ) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.errorFlag = false;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  ngOnInit() {
    console.log('shared user: ');
    console.log(this.sharedService.user);
  }

}
