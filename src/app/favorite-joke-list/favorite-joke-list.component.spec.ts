import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJokeListComponent } from './favorite-joke-list.component';

describe('FavoriteJokeListComponent', () => {
  let component: FavoriteJokeListComponent;
  let fixture: ComponentFixture<FavoriteJokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteJokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
