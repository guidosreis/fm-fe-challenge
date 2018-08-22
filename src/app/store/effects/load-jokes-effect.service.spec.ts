import { TestBed, inject } from '@angular/core/testing';

import { LoadJokesEffectService } from './load-jokes-effect.service';

describe('LoadJokesEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadJokesEffectService]
    });
  });

  it('should be created', inject([LoadJokesEffectService], (service: LoadJokesEffectService) => {
    expect(service).toBeTruthy();
  }));
});
