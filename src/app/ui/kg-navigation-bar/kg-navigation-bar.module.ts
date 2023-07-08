import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KgButtonNavModule } from '../kg-button-nav/kg-button-nav.module';
import { KgNavigationBarComponent } from './kg-navigation-bar.component';
@NgModule({
  imports: [CommonModule, KgButtonNavModule],
  exports: [KgNavigationBarComponent],
  declarations: [KgNavigationBarComponent],
})
export class KgNavigationBarModule {}
