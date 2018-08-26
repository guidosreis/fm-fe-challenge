import { cloneDeep, keyBy, toArray } from 'lodash';

import { StoreData, INITIAL_STORE_DATA } from '../store-data';
import {
  LOAD_JOKES_SUCCESS, LoadJokesSuccessAction,
  LIKE_JOKE, LikeJokeAction,
  UNLIKE_JOKE, UnlikeJokeAction,
  LOAD_FAVORITE_JOKES_SUCCESS, LoadFavoriteJokesSuccessAction
} from '../actions';

export function storeData(state: StoreData = INITIAL_STORE_DATA, action: any): StoreData {
  switch(action.type) {
    case LOAD_JOKES_SUCCESS:
      return handleLoadJokesSuccessAction(state, <any>action);

    case LOAD_FAVORITE_JOKES_SUCCESS:
      return handleLoadFavoriteJokesSuccessAction(state, <any>action);

    default:
      return state;
  }
}

function handleLoadJokesSuccessAction(state: StoreData, action: LoadJokesSuccessAction): StoreData {
  const newState = cloneDeep(state);

  newState.jokes = keyBy(action.payload, 'id');

  return newState;
}

function handleLoadFavoriteJokesSuccessAction(state: StoreData, action: LoadFavoriteJokesSuccessAction): StoreData {
  const newState = cloneDeep(state);

  newState.favoriteJokes = keyBy(action.payload, 'id');

  return newState;
}