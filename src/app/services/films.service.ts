import { Injectable } from '@angular/core';
import {Response, Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FilmsService {

  constructor(private http:Http) {
  }
  getFilmsData(){
    return this.http.get("http://swapi.co/api/films/").map(
      (res:Response)=> {
        return res.json();
      }
    );
  }

}
