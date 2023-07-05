import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KgButtonNavModule } from '../kg-button-nav/kg-button-nav.module';
import { KgUlLiComponent } from './kg-ul-li.component';
@NgModule({
  imports: [CommonModule, KgButtonNavModule],
  exports: [KgUlLiComponent],
  declarations: [KgUlLiComponent],
})
export class KgUlLiModule {}
