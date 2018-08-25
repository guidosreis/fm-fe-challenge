import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { FavoriteJokesComponent } from './favorite-jokes/favorite-jokes.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { HeaderComponent } from './header/header.component';

// services
import { JokesService } from './services/jokes.service';

// store
import { reducers } from './store/reducers/index';
import { INITIAL_APPLICATION_STATE } from './store/application-state';
import { LoadJokesEffectService } from './store/effects/load-jokes-effect.service';
import { FavoriteJokeListComponent } from './favorite-joke-list/favorite-joke-list.component';
import { LoadFavoriteJokesEffectService } from './store/effects/load-favorite-jokes-effect.service';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    FavoriteJokesComponent,
    JokeListComponent,
    HeaderComponent,
    FavoriteJokeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { initialState: INITIAL_APPLICATION_STATE }),
    EffectsModule.forRoot([
      LoadJokesEffectService,
      LoadFavoriteJokesEffectService
    ]),
    AppRoutingModule
  ],
  providers: [
    JokesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
