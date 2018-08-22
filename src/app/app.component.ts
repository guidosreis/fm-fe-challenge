import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApplicationState } from './store/application-state';
import { LoadJokesAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadJokesAction());
  }
}
