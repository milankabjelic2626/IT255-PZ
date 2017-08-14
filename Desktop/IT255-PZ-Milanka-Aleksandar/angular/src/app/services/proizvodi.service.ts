import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Product from "../model/product";


@Injectable()
export default class ProductService {
    protected url = apiUrl + "getProizvodi.php";

    constructor (protected http: Http) {}

    getProizvodi(): Observable<Product[]> {
        return this.http.get(this.url, {headers: getAuthHeaders() })
            .map(this.extractData)
    }


    protected extractData(res: Response) {
        let obj = JSON.parse(res['_body']);
        return obj.proizvodi;
    }



}
