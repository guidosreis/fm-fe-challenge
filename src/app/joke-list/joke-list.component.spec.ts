import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { JokeListComponent } from './joke-list.component';

import { Joke } from '../model/joke';
import jokes from '../model/jokes.mock';
import favoriteJokes from '../model/favorite-jokes.mock';

fdescribe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;
  let listDe: DebugElement;
  let listEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    component.jokes = jokes;
    component.favoriteJokes = favoriteJokes;

    fixture.detectChanges();

    listDe = fixture.debugElement.query(By.css('.c-list'));
    listEl = listDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display ${jokes.length} items`, () => {
    expect(listEl.getElementsByClassName('c-list__item').length).toBe(jokes.length);
  });

  it('should list contains', () => {
    component.jokes.forEach((joke, index) => {
      const itemEl = listEl.getElementsByClassName('c-list__item').item(index);
      expect(itemEl.textContent).toContain(joke.joke);
    });
  });

  it('should emit jokeLiked event when like button is clicked', () => {
    let joke: Joke;
    const buttonsDe = fixture.debugElement.queryAll(By.css('.c-btn-like'));

    component.jokeLiked.subscribe(value => joke = value);

    buttonsDe.forEach((buttonDe, i) => {
      buttonDe.triggerEventHandler('click', null);
      expect(jokes[i]).toBe(joke);
    });
  });

});
