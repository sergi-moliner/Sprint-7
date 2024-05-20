import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starship/:id', component: StarshipInfoComponent },
  { path: 'home', component: HomeComponent}

];
