import { NgModule } from '@angular/core';
import { CalendarModule } from 'src/app/api/src/components/calendar/calendar.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [NavigationBarModule, CalendarModule],
  providers: [],
})
export class HomeModule {}
