import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJokesComponent } from './favorite-jokes.component';

describe('FavoriteJokesComponent', () => {
  let component: FavoriteJokesComponent;
  let fixture: ComponentFixture<FavoriteJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
