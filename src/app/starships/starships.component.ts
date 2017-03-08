import { Component, OnInit } from '@angular/core';
import {StarshipsService} from "../services/starships.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  private starShipsData ={};
  allStarShips :Array<any>;

  constructor(private starShipsService: StarshipsService) { }

  ngOnInit() {
    this.loadStarShipsData();
  }
  loadStarShipsData(){
    console.log("Loading StarShips Data: into loadPeopleData method ");
    this.starShipsService.getStarShipsData().subscribe(
      res => {
        if (res.results != null) {
          this.allStarShips = res.results;
          for (var i = 0; i < this.allStarShips.length; i++) {
            this.starShipsData = this.allStarShips[i];
          }
        }
        else {
          console.log("starships.component : loadStarShipsData: getStarShipsData: Error in response : ");
        }
      }
    );
  }

}
