import * as fromReducer from './uiStateReducer';
import * as fromActions from '../actions';
import { INITIAL_UI_STATE } from '../ui-state';

fdescribe('UiStateReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {};
      const state = fromReducer.uiState(undefined, action);

      expect(state).toBe(INITIAL_UI_STATE);
    });
  });

  describe('TOGGLE_RANDOM_FAVORITE_JOKE action', () => {
    it('should populate the flag', () => {
      const flag = true;
      const action = new fromActions.ToggleRandomFavoriteJokeAction(flag);
      const state = fromReducer.uiState(INITIAL_UI_STATE, action);

      expect(state.randomFavoriteJokes).toBe(flag);
    });
  });
})