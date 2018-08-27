import { cloneDeep } from 'lodash';

import { TOGGLE_RANDOM_FAVORITE_JOKE } from './../actions';
import { UiState, INITIAL_UI_STATE } from "../ui-state";

export function uiState(state: UiState = INITIAL_UI_STATE, action: any): UiState {
  switch(action.type) {
    case TOGGLE_RANDOM_FAVORITE_JOKE:
      const newState = cloneDeep(state);
      newState.randomFavoriteJokes = action.payload;
      return newState;

    default:
      return state;
  }
}