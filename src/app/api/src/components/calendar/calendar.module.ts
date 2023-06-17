import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { KgCalendarSandbox } from './calendar.sandbox';
@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule],
  providers: [KgCalendarSandbox],
  exports: [CalendarComponent],
})
export class CalendarModule {}
