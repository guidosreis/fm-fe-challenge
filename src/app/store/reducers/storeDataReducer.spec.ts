import { keyBy } from 'lodash';

import * as fromReducer from './storeDataReducer';
import * as fromActions from '../actions';
import jokes from '../../model/jokes.mock';
import favoriteJokes from '../../model/favorite-jokes.mock';
import { INITIAL_STORE_DATA } from '../store-data';

fdescribe('StoreDataReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {};
      const state = fromReducer.storeData(undefined, action);

      expect(state).toBe(INITIAL_STORE_DATA);
    });
  });

  describe('LOAD_JOKES_SUCCESS action', () => {
    it('should populate joke list', () => {
      const action = new fromActions.LoadJokesSuccessAction(jokes);
      const state = fromReducer.storeData(INITIAL_STORE_DATA, action);

      expect(state.jokes).toEqual(keyBy(jokes, 'id'));
    });
  });

  describe('LOAD_FAVORITE_JOKES_SUCCESS action', () => {
    it('should populate favorite joke list', () => {
      const action = new fromActions.LoadFavoriteJokesSuccessAction(favoriteJokes);
      const state = fromReducer.storeData(INITIAL_STORE_DATA, action);

      expect(state.favoriteJokes).toEqual(keyBy(favoriteJokes, 'id'));
    });
  });
});