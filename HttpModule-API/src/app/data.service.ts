import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Idata } from "src/app/data";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http : HttpClient) { }

  private _url : string = 'https://learnwebcode.github.io/json-example/animals-1.json';
  getData() : Observable<Idata[]>{
    return  this.http.get<Idata[]>(this._url);
  }

  
}
