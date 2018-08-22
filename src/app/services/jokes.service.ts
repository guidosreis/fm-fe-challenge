import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API = `${environment.API}jokes/`;

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
}
