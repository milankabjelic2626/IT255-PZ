import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
import Prodavnica from "../../model/prodavnica";
import ProdavniceService from "../../services/prodavnice.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prodavnice',
    templateUrl: './prodavnice.html',
    styleUrls : ['./prodavnice.css'],
})
export default class ProdavniceComponent implements OnInit, OnDestroy  {

    id: number;
    prodavnice: Prodavnica[];
    private sub: any;

    constructor(private prodavniceService: ProdavniceService,private route: ActivatedRoute) {
        var $:any;
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

        });

    }
    ngOnInit() {
        this.loadProdavnice();
    }

    loadProdavnice() {
        var $:any;
        this.prodavniceService.getProdavnice().subscribe(data => {
            this.prodavnice = data;
            setInterval(function(){
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(this),400);
        });


    }

    ngOnDestroy(){
        this.sub.unsubscribe();

    }

}
