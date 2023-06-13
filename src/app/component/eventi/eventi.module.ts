import { NgModule } from '@angular/core';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { EventiComponent } from './eventi.component';

@NgModule({
  declarations: [EventiComponent],
  imports: [NavigationBarModule],
  providers: [],
})
export class EventiModule {}
