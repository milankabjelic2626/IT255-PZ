import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {LoginService} from "../../services/login.service";
import User from "../../model/user";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls : ['app/css/auxiliary.css'],
})

export default class LoginComponent {
  loginForma = new FormGroup({
    email: new FormControl(),
    lozinka: new FormControl()
  });
   token: User;

  constructor(private http: Http, private router: Router,private loginService: LoginService) {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/login']);
    }

  }

  login(login: User): void {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.loginService.callService(login).subscribe(data => {
      localStorage.setItem('token', data['token']);

      this.router.navigate(['']);
    });

  }
}
