import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { random } from 'lodash';

import { FavoriteJokesComponent } from './favorite-jokes.component';
import jokes from '../model/jokes.mock';
import * as fromApplicationState from '../store/application-state';
import * as fromReducer from '../store/reducers';
import * as fromActions from '../store/actions';

fdescribe('FavoriteJokesComponent', () => {
  let component: FavoriteJokesComponent;
  let fixture: ComponentFixture<FavoriteJokesComponent>;
  let store: Store<fromApplicationState.ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          fromReducer.reducers
        ),
      ],
      declarations: [ FavoriteJokesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(FavoriteJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of jokes after the data is loaded', () => {
    const action = new fromActions.LoadFavoriteJokesSuccessAction(jokes);

    store.dispatch(action);

    component.favoriteJokes$.subscribe(items => {
      expect(items.length).toEqual(jokes.length);
    });
  });

  describe('onJokeUnliked', () => {
    it('should dispatch an action', () => {
      const randomId = jokes[random(jokes.length - 1)].id;
      const action = new fromActions.UnlikeJokeAction(randomId);

      component.onJokeUnliked(randomId);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
