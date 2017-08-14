import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router} from '@angular/router';
import {RegisterService} from "../../services/register.service";
import User from "../../model/user";

@Component({
  selector: 'register',
  templateUrl: `./register.html`,
  styleUrls : ['app/css/auxiliary.css'],
})

export default class RegisterComponent {

    registracijaForm = new FormGroup({
    ime: new FormControl(),
    prezime: new FormControl(),
    adresa: new FormControl(),
    email: new FormControl(),
    lozinka: new FormControl()
  });

  constructor( private http: Http,private router: Router, private registerService: RegisterService) {
    if (localStorage.getItem('token') != null) {
        /*localStorage.removeItem('token');*/ /*brisanje tokena ako je neko ulogovan!!!!!*/
      this.router.navigate(['/']);
    }
    else{
        this.router.navigate(['/register']);
    }
  }

  onRegistracija(model: User) {
    this.registerService.callService(model).subscribe(data => {
      localStorage.setItem('token', data['token']);
      this.router.navigate(['/']);
    });

  }

}
