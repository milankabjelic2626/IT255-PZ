import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import Product from "../../model/product";
import Korpa from "../../model/korpa";
import ProductService from "../../services/proizvodi.service";
import { ActivatedRoute } from '@angular/router';
import {KorpaService} from "../../services/korpa.service";

@Component({
    selector: 'proizvodi',
    templateUrl: './proizvodi.html',
    styleUrls : ['app/css/home.css'],
})
export default class ProizvodiComponent implements OnInit, OnDestroy  {

    id: number;
    products: Product[];
    isAuth: String;
    private sub: any;
    korpa : Korpa;

    constructor(private http: Http, private proizvodiService: ProductService,private korpaService : KorpaService,private route: ActivatedRoute) {
        var $:any;
        this.isAuth = localStorage.getItem('token');
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

        });


    }
    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.proizvodiService.getProizvodi()
            .subscribe(
                data => this.products = data
            )
        ;


    }
    dodajUKorpu(id: number) {
        id = parseFloat(id.toString());
        this.korpaService.addToCart(id, 1);
    }




    ngOnDestroy(){
        this.sub.unsubscribe();

}

}
