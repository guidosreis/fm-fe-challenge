import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { remove } from 'lodash';

import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { Joke } from '../model/joke';

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

  likeJoke(joke: Joke) {
    const data = JSON.parse(localStorage.getItem(FAVORITE_JOKES)) || {};
    let { jokes } = data;

    if (!jokes) { jokes = []; }

    jokes.push(joke);
    localStorage.setItem(FAVORITE_JOKES, JSON.stringify({jokes}));
    return of(data);
  }

  unlikeJoke(id: number) {
    const data = JSON.parse(localStorage.getItem(FAVORITE_JOKES));
    let { jokes } = data;

    remove(jokes, j => j.id === id);

    localStorage.setItem(FAVORITE_JOKES, JSON.stringify({jokes}));
    return of(data);
  }
}
