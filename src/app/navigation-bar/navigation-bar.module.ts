import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [RouterModule],
  providers: [],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
