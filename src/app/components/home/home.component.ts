import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, StarshipsListComponent, RouterModule, RouterOutlet, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
