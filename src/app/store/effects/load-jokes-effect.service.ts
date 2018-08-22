import { LoadJokesSuccessAction } from './../actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { JokesService } from '../../services/jokes.service';
import { LoadJokesAction, LOAD_JOKES } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class LoadJokesEffectService {

  constructor(private actions$: Actions, private jokesService: JokesService) { }

  @Effect() jokes$: Observable<Action> = this.actions$
    .ofType<LoadJokesAction>(LOAD_JOKES)
    .pipe(
      switchMap(action => this.jokesService.getJokes()),
      map(data => new LoadJokesSuccessAction(data['jokes']))
    );
}
