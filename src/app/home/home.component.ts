import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsListComponent } from '../starships-list/starships-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, StarshipsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
