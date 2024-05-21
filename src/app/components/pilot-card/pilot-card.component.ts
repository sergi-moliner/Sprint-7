import { Component, Input } from '@angular/core';
import { Pilot } from '../../core/interfaces/pilot';

@Component({
  selector: 'app-pilot-card',
  standalone: true,
  imports: [],
  template: `
    <div class="pilot-card">
      <img [src]="getPilotImage(pilot.url)" alt="{{ pilot.name }}" class="img-fluid">
      <p>{{ pilot.name.toUpperCase() }}</p>
    </div>
  `,
  styleUrls: ['./pilot-card.component.scss']
})
export class PilotCardComponent {
  @Input() pilot!: Pilot;

  getPilotImage(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }
}
