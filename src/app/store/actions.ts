import { Joke } from './../model/joke';
import { Action } from '@ngrx/store';

export const LOAD_JOKES = 'LOAD_JOKES';
export const LOAD_JOKES_SUCCESS = 'LOAD_JOKES_SUCCESS';
export const LOAD_JOKE = 'LOAD_JOKE';
export const LOAD_JOKE_SUCCESS = 'LOAD_JOKE';
export const LIKE_JOKE = 'LIKE_JOKE';
export const UNLIKE_JOKE = 'UNLIKE_JOKE';
export const TOGGLE_RANDOM_FAVORITE_JOKE = 'TOGGLE_RANDOM_FAVORITE_JOKE';

export class LoadJokesAction implements Action {
  readonly type = LOAD_JOKES;
}

export class LoadJokesSuccessAction implements Action {
  readonly type = LOAD_JOKES_SUCCESS;

  constructor(public payload: Joke[]) { }
}

export class LoadJokeAction implements Action {
  readonly type = LOAD_JOKE;
}

export class LoadJokeSuccessAction implements Action {
  readonly type = LOAD_JOKE_SUCCESS;

  constructor(public payload: Joke) { }
}

export class LikeJokeAction implements Action {
  readonly type = LIKE_JOKE;

  constructor(public payload: Joke) { }
}

export class UnlikeJokeAction implements Action {
  readonly type = UNLIKE_JOKE;

  constructor(public payload: number) { }
}

export class ToggleRandomFavoriteJokeAction implements Action {
  readonly type = TOGGLE_RANDOM_FAVORITE_JOKE;
}