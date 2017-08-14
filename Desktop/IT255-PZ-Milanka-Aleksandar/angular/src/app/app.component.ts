import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from "./model/user";
import {UserService} from "./services/user.service";
import {stringify} from "@angular/core/src/util";

@Component({
  selector: 'projekat',
  templateUrl: './router.html',
})
export class AppComponent implements OnInit {
  korisnik: User;
  router: Router;
  isAuth: Boolean;

  constructor(router: Router, private _userService: UserService) {
 /*   this.token.token = JSON.parse(localStorage.getItem('token'));*/
    this.router = router;
    this.router.events.subscribe(() => {
      this.isAuth = localStorage.getItem('token') !== null;
      if (localStorage.getItem('token')!==null) {
        this.loadUser();
      }
    });

  }


  ngOnInit() {
    if (localStorage.getItem('token')!==null) {
      this.loadUser();

    }

  }

  loadUser() {
    this._userService.getUser()
        .subscribe(data => this.korisnik = data);

  }



  onLogout(): void {

    this.router.navigate(['./']);
    localStorage.removeItem('token');
    this.isAuth = localStorage.getItem('token') !== null;




  }
}
