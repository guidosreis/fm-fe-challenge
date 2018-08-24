import { TestBed, inject } from '@angular/core/testing';

import { LoadFavoriteJokesEffectService } from './load-favorite-jokes-effect.service';

describe('LoadFavoriteJokesEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadFavoriteJokesEffectService]
    });
  });

  it('should be created', inject([LoadFavoriteJokesEffectService], (service: LoadFavoriteJokesEffectService) => {
    expect(service).toBeTruthy();
  }));
});
