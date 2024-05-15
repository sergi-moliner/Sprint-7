import { Routes } from '@angular/router';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';


export const routes: Routes = [

  { path: 'starships', component: StarshipsListComponent },
  { path: 'starship/:id', component: StarshipInfoComponent },
];
