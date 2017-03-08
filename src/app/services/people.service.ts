import { Injectable } from '@angular/core';
import {Response, Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http:Http) {
  }
  getPeopleData(){
    return this.http.get("http://swapi.co/api/people/").map(
      (res:Response)=> {
        return res.json();
      }
    );
  }

}
