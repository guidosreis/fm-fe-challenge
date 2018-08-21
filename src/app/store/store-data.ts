import { Joke } from './../model/joke';

export interface StoreData {
  jokes: {[key: number]: Joke};
  favoriteJokes: {[key: number]: Joke};
}

export const INITIAL_STORE_DATA: StoreData = {
  jokes: {},
  favoriteJokes: {}
};