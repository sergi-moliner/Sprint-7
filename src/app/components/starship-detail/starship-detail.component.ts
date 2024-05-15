import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { Starship, StarshipResults } from '../../core/interfaces/starship';
import { CommonModule } from '@angular/common';;
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { StarshipsService } from '../services/starships.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [HomeComponent, RouterModule, CommonModule, StarshipsListComponent],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss'
})
export class StarshipDetailComponent implements OnInit{
  public starshipDetail$!: Observable<StarshipResults>;

  constructor(private route: ActivatedRoute, private starshipService: StarshipsService) {  }

  ngOnInit(): void {

  }
}
