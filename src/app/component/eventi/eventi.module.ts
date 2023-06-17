import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'src/app/api/src/components/calendar/calendar.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { EventiComponent } from './eventi.component';

@NgModule({
  declarations: [EventiComponent],
  imports: [CommonModule, NavigationBarModule, CalendarModule],
})
export class EventiModule {}
