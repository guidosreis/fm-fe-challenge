import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../model/joke';

@Component({
  selector: 'favorite-joke-list',
  templateUrl: './favorite-joke-list.component.html',
  styleUrls: ['./favorite-joke-list.component.css']
})
export class FavoriteJokeListComponent {
  @Input() favoriteJokes: Joke[];

  @Output() jokeUnliked = new EventEmitter();

  unlike(id: number) {
    this.jokeUnliked.next(id);
  }

}
