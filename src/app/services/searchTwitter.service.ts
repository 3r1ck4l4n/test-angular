import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Global} from "../env/url.env";

@Injectable()
export class SearchTwitterService{
  public url:string;
  constructor(
    private _http:HttpClient
  ) {
    this.url=Global.url;
  }

  searchTwitts(searchString:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(`${this.url}search?search=${searchString}`,{headers:headers});
  }
}
