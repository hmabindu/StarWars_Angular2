import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../services/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private peopleData ={};
  allArtists :Array<any>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.loadPeopleData();
  }
  loadPeopleData(){
    console.log("Loading People Data: into loadPeopleData method ");
    this.peopleService.getPeopleData().subscribe(
      res => {
        console.log("people.component : loadPeopleData: getPeopleData: response : ", res);
        if (res.results != null) {
          this.allArtists = res.results;
          console.log("people.component : loadPeopleData: getPeopleData: All People : ", this.allArtists);
          for (var i = 0; i < this.allArtists.length; i++) {
            this.peopleData = this.allArtists[i];
          }
        }
        else {
          console.log("people.component : loadPeopleData: getPeopleData: Error in response : ");
        }
      }
    );
  }

}
