import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Global} from "../env/url.env";
import {UserModel} from "../models/user.model";
import {LoginModel} from "../models/login.model";

@Injectable()
export class AuthService {
  public url: string
  constructor(
    private _http: HttpClient
  ) {
    this.url=Global.url;
  }

  addUser(user: UserModel):Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(`${this.url}register`,params, {headers:headers});
  }

  login(loginData:LoginModel):Observable<any>{
    let params = JSON.stringify(loginData);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(`${this.url}login`,params,{headers:headers});
  }



}
