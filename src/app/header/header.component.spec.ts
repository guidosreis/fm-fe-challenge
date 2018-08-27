import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let switchDe: DebugElement;
  let switchEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.randomFavoriteJokes = false;

    fixture.detectChanges();

    switchDe = fixture.debugElement.query(By.css('.c-switch__input'));
    switchEl = switchDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit randomFavoriteJokesToggled event when switch is toggled', () => {
    spyOn(component.randomFavoriteJokesToggled, 'emit');
    
    switchEl.click();
    fixture.detectChanges();

    expect(component.randomFavoriteJokesToggled.emit).toHaveBeenCalled();
    expect(component.randomFavoriteJokesToggled.emit).toHaveBeenCalledWith(component.randomFavoriteJokes);
  });
});
