import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Joke } from '../model/joke';
import { ApplicationState } from '../store/application-state';
import { UnlikeJokeAction } from '../store/actions';
import { mapStateToFavoriteJokes } from './mapStateToFavoriteJokes';

@Component({
  selector: 'app-favorite-jokes',
  templateUrl: './favorite-jokes.component.html',
  styleUrls: ['./favorite-jokes.component.css']
})
export class FavoriteJokesComponent {
  favoriteJokes$: Observable<Joke[]>;

  constructor(private store: Store<ApplicationState>) {
    this.favoriteJokes$ = store.select(mapStateToFavoriteJokes);
  }

  onJokeUnliked(id: number) {
    this.store.dispatch(new UnlikeJokeAction(id));
  }

}
