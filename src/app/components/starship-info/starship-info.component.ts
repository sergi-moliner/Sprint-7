import { Component } from '@angular/core';
import { Starship } from '../../core/interfaces/starship';
import { RouterModule, RouterLink } from '@angular/router';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StarshipsService } from '../services/starships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starship-info',
  standalone: true,
  imports: [RouterModule, RouterLink, StarshipsListComponent, CommonModule],
  templateUrl: './starship-info.component.html',
  styleUrl: './starship-info.component.scss'
})
export class StarshipInfoComponent {

  public starship$!: Observable<Starship>;
  imgURL: string = '';

  constructor(private route: ActivatedRoute, private starshipService: StarshipsService) {  }

  ngOnInit(): void {
    this.starship$ = this.route.params.pipe(
      switchMap(params => {
        const id : string  = params['id'];
        this.imgURL = this.starshipService.getStarshipImage(id);
        return this.starshipService.getStarshipDetail(id);
      })
    );
  }

  imageError() {
    this.imgURL = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
