import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KgButtonModule } from 'src/app/ui/kg-button/kg-button.module';
import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [RouterModule, CommonModule, KgButtonModule],
  providers: [],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
