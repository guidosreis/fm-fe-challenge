import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FavoriteJokeListComponent } from './favorite-joke-list.component';
import favoriteJokes from '../model/favorite-jokes.mock';

describe('FavoriteJokeListComponent', () => {
  let component: FavoriteJokeListComponent;
  let fixture: ComponentFixture<FavoriteJokeListComponent>;
  let listDe: DebugElement;
  let listEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteJokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJokeListComponent);
    component = fixture.componentInstance;
    component.favoriteJokes = favoriteJokes;

    fixture.detectChanges();

    listDe = fixture.debugElement.query(By.css('.c-list'));
    listEl = listDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display ${favoriteJokes.length} items`, () => {
    expect(listEl.getElementsByClassName('c-list__item').length).toBe(favoriteJokes.length);
  });

  it('should list contains', () => {
    component.favoriteJokes.forEach((joke, index) => {
      const itemEl = listEl.getElementsByClassName('c-list__item').item(index);
      expect(itemEl.textContent).toContain(joke.joke);
    });
  });

  it('should emit jokeUnliked event when unlike button is clicked', () => {
    let id: number;
    const buttonsDe = fixture.debugElement.queryAll(By.css('.c-btn-unlike'));

    component.jokeUnliked.subscribe(value => id = value);

    buttonsDe.forEach((buttonDe, i) => {
      buttonDe.triggerEventHandler('click', null);
      expect(favoriteJokes[i].id).toBe(id);
    });
  });
});
