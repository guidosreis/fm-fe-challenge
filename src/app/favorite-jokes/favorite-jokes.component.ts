import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { toArray } from 'lodash';

import { Joke } from '../model/joke';
import { ApplicationState } from '../store/application-state';
import { UnlikeJokeAction } from '../store/actions';

function stateToFavoriteJokesSelector(state: ApplicationState): Joke[] {
  return toArray(state.storeData.jokes);
}

@Component({
  selector: 'app-favorite-jokes',
  templateUrl: './favorite-jokes.component.html',
  styleUrls: ['./favorite-jokes.component.css']
})
export class FavoriteJokesComponent {
  favoriteJokes$: Observable<Joke[]>;

  constructor(private store: Store<ApplicationState>) {
    this.favoriteJokes$ = store.select(stateToFavoriteJokesSelector);
  }

  onJokeUnliked(id: number) {
    this.store.dispatch(new UnlikeJokeAction(id));
  }

}
