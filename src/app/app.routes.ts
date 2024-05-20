import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'starships', component: StarshipsListComponent, canActivate: [authGuard] },
  { path: 'starship/:id', component: StarshipInfoComponent, canActivate: [authGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
