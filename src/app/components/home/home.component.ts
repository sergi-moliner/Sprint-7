import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
