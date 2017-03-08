import { RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FilmsComponent} from "./films/films.component";
import {PeopleComponent} from "./people/people.component";
import {StarshipsComponent} from "./starships/starships.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent},
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
];
export const routing =RouterModule.forRoot(APP_ROUTES) ;

