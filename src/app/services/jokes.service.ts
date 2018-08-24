import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { of } from 'rxjs';

const API = `${environment.API}jokes/`;
const FAVORITE_JOKES = 'FAVORITE_JOKES';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  constructor(private http: HttpClient) { }

  getJokes() {
    return this.http.get(`${API}list`);
  }

  getRandom() {
    return this.http.get(`${API}random`);
  }

  getFavoriteJokes() {
    return of(JSON.parse(localStorage.getItem(FAVORITE_JOKES)) || {});
  }
}
