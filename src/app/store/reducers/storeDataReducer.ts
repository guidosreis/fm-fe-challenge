import { LoadJokeSuccessAction } from './../actions';
import { cloneDeep, keyBy } from 'lodash';

import { StoreData, INITIAL_STORE_DATA } from './../store-data';
import {
  LOAD_JOKES_SUCCESS, LoadJokesSuccessAction,
  LIKE_JOKE, LikeJokeAction,
  UNLIKE_JOKE, UnlikeJokeAction
} from '../actions';

export function storeData(state: StoreData = INITIAL_STORE_DATA, action: any): StoreData {
  switch(action.type) {
    case LOAD_JOKES_SUCCESS:
      return handleLoadJokesSuccessAction(state, <any>action);

    case LIKE_JOKE:
      return handleLikeJokeAction(state, <any>action);

    case UNLIKE_JOKE:
      return handleUnlikeJokeAction(state, <any>action);

    default:
      return state;
  }
}

function handleLoadJokesSuccessAction(state: StoreData, action: LoadJokesSuccessAction): StoreData {
  const newState = cloneDeep(state);

  newState.jokes = keyBy(action.payload, 'id');

  return newState;
}

function handleLikeJokeAction(state: StoreData, action: LikeJokeAction): StoreData {
  const newState = cloneDeep(state);

  newState.favoriteJokes[action.payload.id] = action.payload;

  return newState;
}

function handleUnlikeJokeAction(state: StoreData, action: UnlikeJokeAction): StoreData {
  const newState = cloneDeep(state);

  delete newState.favoriteJokes[action.payload];

  return newState;
}