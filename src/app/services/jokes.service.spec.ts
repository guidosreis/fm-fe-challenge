import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { random } from 'lodash';

import { JokesService, FAVORITE_JOKES } from './jokes.service';
import jokes from '../model/jokes.mock';
import favoriteJokes from '../model/favorite-jokes.mock';

describe('JokesService', () => {
  let service: JokesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokesService]
    });
    service = TestBed.get(JokesService);
    httpMock = TestBed.get(HttpTestingController);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getJokes', () => {
    it('should return an Observable', () => {
      service.getJokes().subscribe(data => {
        expect(data['jokes']).toEqual(jokes);
      });

      const req = httpMock.expectOne('http://localhost:3000/api/v1/jokes/list');
      expect(req.request.method).toBe('GET');
      req.flush({jokes});
      
    });
  });

  describe('getRandom', () => {
    it('should return an Observable', () => {
      const randomJoke = jokes[random(jokes.length - 1)];

      service.getRandom().subscribe(data => {
        expect(data['joke']).toEqual(randomJoke);
      });

      const req = httpMock.expectOne('http://localhost:3000/api/v1/jokes/random');
      expect(req.request.method).toBe('GET');
      req.flush({joke: randomJoke});
    });
  });

  describe('likeJoke', () => {
    it('should store the liked joke in localStorage', () => {
      const joke = jokes[random(jokes.length - 1)];
      service.likeJoke(joke);
      const myFavoriteJokes = JSON.parse(localStorage.getItem(FAVORITE_JOKES));
      expect(myFavoriteJokes['jokes']).toContain(joke);
    });
  });

  describe('unlikeJoke', () => {
    it('should remove the uliked joke from localStorage', () => {
      const data = JSON.stringify({jokes: favoriteJokes});
      const joke = jokes[random(favoriteJokes.length - 1)]
      const id = joke.id;
      localStorage.setItem(FAVORITE_JOKES, data);
      service.unlikeJoke(id);
      const myFavoriteJokes = JSON.parse(localStorage.getItem(FAVORITE_JOKES));
      expect(myFavoriteJokes['jokes']).not.toContain(joke);
    });
  });
});
