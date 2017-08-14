import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import User from "../model/user";
import {SharedService} from "../services/shared.service";
import {apiUrl, getAuthHeaders} from "../constants";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    url = apiUrl + 'userservice.php';

    constructor(private _http: Http) {
    }

    getUser(): Observable<User> {
        let headers = getAuthHeaders();
        return this._http.get(this.url , {headers: headers})
            .map((response: Response) => <User> response.json());
    }




}