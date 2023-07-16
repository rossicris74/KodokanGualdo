import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDivComponent } from './calendar-div.component';

describe('CalendarComponent', () => {
  let component: CalendarDivComponent;
  let fixture: ComponentFixture<CalendarDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarDivComponent],
    });
    fixture = TestBed.createComponent(CalendarDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
