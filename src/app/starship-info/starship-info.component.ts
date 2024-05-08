import { Component, Input } from '@angular/core';
import { Starship } from '../core/interfaces/starship';

@Component({
  selector: 'app-starship-info',
  standalone: true,
  imports: [],
  templateUrl: './starship-info.component.html',
  styleUrl: './starship-info.component.scss'
})
export class StarshipInfoComponent {
  @Input() starshipInfo: Starship;

  constructor() {
    this.starshipInfo = {} as Starship;
  }
}
