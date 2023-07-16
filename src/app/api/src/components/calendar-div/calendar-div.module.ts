import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarDivComponent } from './calendar-div.component';
import { KgCalendarDivSandbox } from './calendar-div.sandbox';
@NgModule({
  declarations: [CalendarDivComponent],
  imports: [RouterModule, CommonModule],
  providers: [KgCalendarDivSandbox],
  exports: [CalendarDivComponent],
})
export class CalendarModule {}
