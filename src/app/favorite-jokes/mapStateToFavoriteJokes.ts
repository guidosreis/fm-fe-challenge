import { toArray } from 'lodash';

import { ApplicationState } from '../store/application-state';
import { Joke } from '../model/joke';

export function mapStateToFavoriteJokes(state: ApplicationState): Joke[] {
  return toArray(state.storeData.favoriteJokes);
}