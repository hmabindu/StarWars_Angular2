import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../services/films.service";
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  private filmData ={};
  allFilms :Array<any>;
  public oneAtATime: boolean = true;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.loadFilmsData();

  }
  loadFilmsData(){
    this.filmsService.getFilmsData().subscribe(
      res => {
        if (res.results != null) {
          this.allFilms = res.results;
          for (var i = 0; i < this.allFilms.length; i++) {
            this.filmData = this.allFilms[i];
          }
        }
        else {
          console.log("films.component : loadFilmsData: getFilmsData: Error in response : ");
        }
      }
    );
  }

}
