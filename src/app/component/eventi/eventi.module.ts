import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { EventiComponent } from './eventi.component';

@NgModule({
  declarations: [EventiComponent],
  imports: [CommonModule, NavigationBarModule],
})
export class EventiModule {}
