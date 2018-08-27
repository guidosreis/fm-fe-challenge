import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokesComponent } from './jokes/jokes.component';
import { FavoriteJokesComponent } from './favorite-jokes/favorite-jokes.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'jokes' },
  { path: 'jokes', component: JokesComponent },
  { path: 'favorite-jokes', component: FavoriteJokesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
