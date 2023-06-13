import { NgModule } from '@angular/core';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [NavigationBarModule],
  providers: [],
})
export class HomeModule {}
