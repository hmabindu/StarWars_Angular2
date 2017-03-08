import { Injectable } from '@angular/core';
import {Response, Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StarshipsService {

  constructor(private http:Http) {}
  getStarShipsData(){
    return this.http.get("http://swapi.co/api/starships/").map(
      (res:Response)=> {
        return res.json();
      }
    );
  }


}
