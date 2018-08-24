import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { JokesService } from '../../services/jokes.service';
import { LoadFavoriteJokesAction, LOAD_FAVORITE_JOKES, LoadFavoriteJokesSuccessAction } from '../actions';
import { Joke } from '../../model/joke';

@Injectable({
  providedIn: 'root'
})
export class LoadFavoriteJokesEffectService {

  constructor(private actions$: Actions, private jokesService: JokesService) { }

  @Effect() favoriteJokes: Observable<Action> = this.actions$
    .ofType<LoadFavoriteJokesAction>(LOAD_FAVORITE_JOKES)
    .pipe(
      switchMap(action => this.jokesService.getFavoriteJokes()),
      map(data => new LoadFavoriteJokesSuccessAction(data['jokes']))
    )
}
