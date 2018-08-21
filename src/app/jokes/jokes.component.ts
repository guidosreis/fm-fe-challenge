import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { toArray } from 'lodash';

import { Joke } from '../model/joke';
import { ApplicationState } from '../store/application-state';
import { LikeJokeAction } from '../store/actions';

function stateToJokesSelector(state: ApplicationState): Joke[] {
  return toArray(state.storeData.jokes);
}

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
  jokes$: Observable<Joke[]>;

  constructor(private store: Store<ApplicationState>) {
    this.jokes$ = store.select(stateToJokesSelector);
  }

  onJokeLiked(joke: Joke) {
    this.store.dispatch(new LikeJokeAction(joke));
  }

}
