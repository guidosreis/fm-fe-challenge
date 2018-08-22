import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationState } from './store/application-state';
import { LoadJokesAction, ToggleRandomFavoriteJokeAction, LoadJokeAction } from './store/actions';
import { Joke } from './model/joke';
import { mapStateToFavoriteJokes } from './favorite-jokes/mapStateToFavoriteJokes';

function mapStateToRandomFavoriteJoke(state: ApplicationState): boolean {
  return state.uiState.randomFavoriteJokes;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomFavoriteJokes$: Observable<boolean>;
  favoriteJokes$: Observable<Joke[]>;
  favoriteJokes: Joke[];
  timer: any;

  constructor(private store: Store<ApplicationState>) {
    this.randomFavoriteJokes$ = store.select(mapStateToRandomFavoriteJoke);
    this.favoriteJokes$ = store.select(mapStateToFavoriteJokes);
  }

  ngOnInit() {
    this.store.dispatch(new LoadJokesAction());

    this.favoriteJokes$
      .subscribe(favoriteJokes => this.favoriteJokes = favoriteJokes);

    this.randomFavoriteJokes$
      .subscribe(randomFavoriteJokes => {
        if (!randomFavoriteJokes) {
          return clearTimeout(this.timer);
        };

        this.updateTimer();
      });
  }

  updateTimer() {
    this.timer = setTimeout(() => {
      if (this.favoriteJokes.length < 10) {
        this.store.dispatch(new LoadJokeAction());
      }

      this.updateTimer();
    }, 1000);
  }

  onRandomFavoriteJokesToggled() {
    this.store.dispatch(new ToggleRandomFavoriteJokeAction())
  }
}
