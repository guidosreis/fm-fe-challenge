import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import * as fromApplicationState from './store/application-state';
import * as fromReducer from './store/reducers';
import * as fromActions from './store/actions';
import { routes } from './app-routing.module';
import { JokesComponent } from './jokes/jokes.component';
import { FavoriteJokesComponent } from './favorite-jokes/favorite-jokes.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromApplicationState.ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        StoreModule.forRoot(
          fromReducer.reducers
        ),
      ],
      declarations: [
        JokesComponent,
        FavoriteJokesComponent,
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should dispatch an action to load jokes when created', () => {
    const action = new fromActions.LoadJokesAction();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to load favorite jokes when created', () => {
    const action = new fromActions.LoadFavoriteJokesAction();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  describe('onRandomFavoriteJokesToggled', () => {
    it('should dispatch an action', () => {
      const flag = true;
      const action = new fromActions.ToggleRandomFavoriteJokeAction(flag);

      component.onRandomFavoriteJokesToggled(flag);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
