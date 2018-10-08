import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
//import {Router} from "@angular/router";
import { AuthService } from '../../service/auth.service';
import { LOVService } from '../../service/lov.service';
import { UserCredential } from '../../model/user-credential.model'
import { Select2Control } from '../../shared/model/select2control';
//import { AuthServiceGoggle, AppGlobals } from 'angular2-google-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ LOVService]
})
export class LoginComponent implements OnInit {
  @Input() propPeran: Select2Control = new Select2Control();

  loginAs: Object[] = [];

  user = { "username": "", "password": "", "loginAs": "" };

  constructor( private lov: LOVService, private elementRef: ElementRef, private authService: AuthService) {
    
  }

  ngOnInit() {

  }

  login(event) {
    // console.log("EV:", this.user);
    event.preventDefault();
    var cred: UserCredential = new UserCredential();
    cred.username = this.user.username;
    cred.password = this.user.password;
    cred.loginAs = this.user.loginAs;
    this.authService.login(cred);
  }

  logout(event) {
    
  }

}
