import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { JokesService } from '../../services/jokes.service';
import {
  LikeJokeAction, LIKE_JOKE,
  UnlikeJokeAction, UNLIKE_JOKE,
  LoadFavoriteJokesSuccessAction
} from '../actions';

@Injectable({
  providedIn: 'root'
})
export class LikeJokeEffectService {

  constructor(private actions$: Actions, private jokesService: JokesService) { }

  @Effect() likedJoke$: Observable<Action> = this.actions$
    .ofType<LikeJokeAction>(LIKE_JOKE)
    .pipe(
      switchMap(action => this.jokesService.likeJoke(action.payload)),
      map(data => new LoadFavoriteJokesSuccessAction(data['jokes']))
    )

    @Effect() unlikedJoke$: Observable<Action> = this.actions$
    .ofType<UnlikeJokeAction>(UNLIKE_JOKE)
    .pipe(
      switchMap(action => this.jokesService.unlikeJoke(action.payload)),
      map(data => new LoadFavoriteJokesSuccessAction(data['jokes']))
    )
}
