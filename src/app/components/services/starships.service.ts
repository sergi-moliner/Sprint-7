import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipResults, Starship } from '../../core/interfaces/starship';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarshipsList(page: number): Observable<StarshipResults> {
    return this.http.get<StarshipResults>(`${environment.apiUrlBase}?page=${page}`);
  }
  getStarshipDetail(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${environment.apiUrlBase}${id}`);
  }
  getStarshipImage(id: string): string {
    return `${environment.apiUrlImage}${id}.jpg`;
  }

}
