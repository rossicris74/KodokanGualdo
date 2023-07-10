import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { KgCalendarSandbox } from './calendar.sandbox';
@NgModule({
  declarations: [CalendarComponent],
  imports: [RouterModule, CommonModule],
  providers: [KgCalendarSandbox],
  exports: [CalendarComponent],
})
export class CalendarModule {}
