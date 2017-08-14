import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router} from '@angular/router';
import {AdminService} from "../../services/admin.service";
import User from "../../model/user";
import ProductService from "../../services/proizvodi.service";
import Product from "../../model/product";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'adminpanel',
    templateUrl: `./adminpanel.html`,
    styleUrls : ['app/css/home.css'],

})

export default class AdminPanelComponent implements OnInit {
    proizvodi : Product[];
    korisnik : User;
    addProductForm = new FormGroup({

        ime: new FormControl(),
        katID: new FormControl(),
        opis: new FormControl(),
        cena: new FormControl(),
        url: new FormControl(),
        akcija: new FormControl(),


    });

    constructor( private http: Http,private router: Router, private adminService: AdminService, private proizvodiService: ProductService, private _userService : UserService) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);

        }

    }




    addProduct(model: Product) {
        this.adminService.callService(model).subscribe(data => {
            this.router.navigate(['/']);
        });

    }

    ngOnInit(){
        this.loadProizvodi();


}

    loadProizvodi() {
        var $:any;
        this.proizvodiService.getProizvodi().subscribe(data => {
            this.proizvodi = data;
            setInterval(function(){
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(this),400);
        });


    }

    remove(id:number){
    this.adminService.removeProduct(id);



    }


}
