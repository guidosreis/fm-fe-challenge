import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { FavoriteJokesComponent } from './favorite-jokes/favorite-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    FavoriteJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
