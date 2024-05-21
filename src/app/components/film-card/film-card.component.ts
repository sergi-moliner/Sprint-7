import { Component } from '@angular/core';
import { Film } from '../../core/interfaces/film';
import { Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  template: `
    <div class="film-card">
      <img [src]="getFilmImage(film.url)" alt="{{ film.title }}" class="img-fluid">
      <p>{{ film.title.toUpperCase() }}</p>
      <p>Episode {{ film.episode_id }}</p>
    </div>
  `,
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  @Input() film!: Film;

  getFilmImage(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
  }
}
