import { Component } from '@angular/core';
import { KgCalendarSandbox } from './calendar.sandbox';

@Component({
  selector: 'kg-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  constructor(readonly calendarSandBox: KgCalendarSandbox) {}

  doPrec() {
    this.calendarSandBox.addMese(-1);
  }
  doSucc() {
    this.calendarSandBox.addMese(+1);
  }
}
