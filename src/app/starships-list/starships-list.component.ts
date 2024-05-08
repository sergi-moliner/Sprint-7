import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsService } from '../services/starships.service';
import { Observable, EMPTY, catchError, BehaviorSubject, concatMap, finalize, from } from 'rxjs';
import { StarshipResults } from '../core/interfaces/starship';
import { StarshipInfoComponent } from '../starship-info/starship-info.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { scan, startWith } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [AsyncPipe, StarshipInfoComponent, ErrorMessageComponent, InfiniteScrollModule],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss'
})
export class StarshipsListComponent implements OnInit {
  public starshipsResult$!: Observable<StarshipResults>;
  public errorMessage!: string;
  public currentPage: number = 1;
  public loading: boolean = false;

  @ViewChild('content') content!: ElementRef;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.fetchStarships();

    fromEvent(this.content.nativeElement, 'scroll')
      .pipe(
        catchError(() => EMPTY),
        finalize(() => console.log('Scroll observable finalizado'))
      )
      .subscribe(() => {
        if (this.shouldLoadMore()) {
          this.currentPage++;
          this.fetchStarships();
        }
      });
  }
  fetchStarships(): void {
    this.loading = true;
    this.starshipsResult$ = this.starshipsService.getStarshipsList(this.currentPage).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      }),
      finalize(() => this.loading = false)
    );
  }

  shouldLoadMore(): boolean {
    if (!this.loading) {
      const content = this.content.nativeElement;
      return content.scrollTop + content.clientHeight >= content.scrollHeight;
    }
    return false;
  }

}
