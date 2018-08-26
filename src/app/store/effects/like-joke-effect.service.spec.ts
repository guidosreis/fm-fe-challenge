import { TestBed, inject } from '@angular/core/testing';

import { LikeJokeEffectService } from './like-joke-effect.service';

describe('LikeJokeEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeJokeEffectService]
    });
  });

  it('should be created', inject([LikeJokeEffectService], (service: LikeJokeEffectService) => {
    expect(service).toBeTruthy();
  }));
});
