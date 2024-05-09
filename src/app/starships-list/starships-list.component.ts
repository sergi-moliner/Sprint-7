import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { StarshipsService } from '../services/starships.service';
import { Observable, EMPTY, catchError, finalize, fromEvent, concatMap } from 'rxjs';
import { StarshipResults } from '../core/interfaces/starship';
import { StarshipInfoComponent } from '../starship-info/starship-info.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [AsyncPipe, StarshipInfoComponent, ErrorMessageComponent, InfiniteScrollModule, CommonModule],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss'
})
export class StarshipsListComponent implements OnInit {
  public starshipsResult$: BehaviorSubject<StarshipResults> = new BehaviorSubject<StarshipResults>({} as StarshipResults);
  public errorMessage!: string;
  public currentPage: number = 1;
  public loading: boolean = false;
  public starshipInfo: StarshipResults | undefined;
  showButton: boolean = true;

  @ViewChild('content') content!: ElementRef;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(): void {
    this.loading = true;
    this.starshipsService.getStarshipsList(this.currentPage).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      }),
      finalize(() => this.loading = false)
    ).subscribe((data: StarshipResults) => {
      const currentValue = this.starshipsResult$.getValue();
      const currentResults = currentValue.results || [];
      const updatedResults = [...currentResults, ...data.results];
      const updatedValue: StarshipResults = {
        count: currentValue.count + data.count,
        next: data.next,
        previous: currentValue.previous,
        results: updatedResults
      };
      this.starshipsResult$.next(updatedValue);
    });
  }

  loadMore(): void {
    this.currentPage++;
    this.fetchStarships();
    if(this.currentPage === 4) {
      this.showButton = false;
      return;
    }
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
