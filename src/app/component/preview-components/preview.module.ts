import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KgButtonNavModule } from 'src/app/ui/kg-button-nav/kg-button-nav.module';
import { KgButtonModule } from 'src/app/ui/kg-button/kg-button.module';
import { KgUlLiModule } from 'src/app/ui/kg-ul-li/kg-ul-li.module';
import { PreviewComponentsComponent } from './preview.component';

@NgModule({
  declarations: [PreviewComponentsComponent],
  imports: [CommonModule, KgUlLiModule, KgButtonModule, KgButtonNavModule],
})
export class PreviewComponentsModule {}
