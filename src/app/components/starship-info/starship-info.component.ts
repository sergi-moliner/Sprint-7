import { Component, OnInit } from '@angular/core';
import { Starship } from '../../core/interfaces/starship';
import { RouterModule, RouterLink } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { StarshipsService } from '../services/starships.service';
import { CommonModule } from '@angular/common';
import { Pilot } from '../../core/interfaces/pilot';
import { Film } from '../../core/interfaces/film';
import { PilotCardComponent } from '../pilot-card/pilot-card.component';
import { FilmCardComponent } from '../film-card/film-card.component';


@Component({
  selector: 'app-starship-info',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, PilotCardComponent, FilmCardComponent],
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.scss']
})
export class StarshipInfoComponent implements OnInit {

  public starship$!: Observable<Starship>;
  public pilots$!: Observable<Pilot[]>;
  public films$!: Observable<Film[]>;
  imgURL: string = '';

  constructor(private route: ActivatedRoute, private starshipService: StarshipsService) { }

  ngOnInit(): void {
    this.starship$ = this.route.params.pipe(
      switchMap(params => {
        const id: string = params['id'];
        this.imgURL = this.starshipService.getStarshipImage(id);
        return this.starshipService.getStarshipDetail(id);
      })
    );

    this.pilots$ = this.starship$.pipe(
      switchMap(starship => {
        const pilotObservables = starship.pilots.map(url => this.starshipService.getPilotDetails(url));
        return forkJoin(pilotObservables);
      })
    );

    this.films$ = this.starship$.pipe(
      switchMap(starship => {
        const filmObservables = starship.films.map(url => this.starshipService.getFilmDetails(url));
        return forkJoin(filmObservables);
      })
    );
  }

  imageError() {
    this.imgURL = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
