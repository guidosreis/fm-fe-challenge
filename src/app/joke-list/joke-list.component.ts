import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Joke } from '../model/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  @Input() jokes: Joke[];
  @Input() favoriteJokes: Joke[];

  @Output() jokeLiked = new EventEmitter();

  like(joke: Joke) {
    this.jokeLiked.next(joke);
  }

  inFavoriteList(id: number) {
    for (let i = 0; i < this.favoriteJokes.length; i++) {
      const joke = this.favoriteJokes[i];
      if (id === joke.id) return true;
    }
    
    return false;
  }

}
