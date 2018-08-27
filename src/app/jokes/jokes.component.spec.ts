import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { random } from 'lodash';

import { JokesComponent } from './jokes.component';
import jokes from '../model/jokes.mock';
import * as fromApplicationState from '../store/application-state';
import * as fromReducer from '../store/reducers';
import * as fromActions from '../store/actions';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;
  let store: Store<fromApplicationState.ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          fromReducer.reducers
        ),
      ],
      declarations: [ JokesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of jokes after the data is loaded', () => {
    const action = new fromActions.LoadJokesSuccessAction(jokes);

    store.dispatch(action);

    component.jokes$.subscribe(items => {
      expect(items.length).toEqual(jokes.length);
    });
  });

  describe('onJokeLiked', () => {
    it('should dispatch an action', () => {
      const randomJoke = jokes[random(jokes.length - 1)];
      const action = new fromActions.LikeJokeAction(randomJoke);

      component.onJokeLiked(randomJoke);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
