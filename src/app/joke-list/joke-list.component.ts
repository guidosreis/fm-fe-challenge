import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Joke } from '../model/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  @Input() jokes: Joke[];
  @Input() favorites: boolean;

  @Output() jokeLiked = new EventEmitter();
  @Output() jokeUnliked = new EventEmitter();

  like(joke: Joke) {
    this.jokeLiked.next(joke);
  }

  unlike(id: number) {
    this.jokeUnliked.next(id);
  }

}
