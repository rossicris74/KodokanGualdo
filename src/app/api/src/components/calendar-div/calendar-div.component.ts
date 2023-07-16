import { Component } from '@angular/core';
import { KgCalendarDivSandbox } from './calendar-div.sandbox';

@Component({
  selector: 'kg-calendar-div',
  templateUrl: './calendar-div.component.html',
  styleUrls: ['./calendar-div.component.css'],
})
export class CalendarDivComponent {
  constructor(readonly calendarDivSandBox: KgCalendarDivSandbox) {}

  doPrec() {
    this.calendarDivSandBox.addMese(-1);
  }
  doSucc() {
    this.calendarDivSandBox.addMese(+1);
  }
}
