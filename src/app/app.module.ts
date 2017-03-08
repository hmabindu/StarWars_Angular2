import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule, ModalModule, TooltipModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import {FilmsService} from "./services/films.service";
import {PeopleService} from "./services/people.service";
import { StarshipsComponent } from './starships/starships.component';
import {StarshipsService} from "./services/starships.service";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    PeopleComponent,
    StarshipsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [FilmsService, PeopleService, StarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
