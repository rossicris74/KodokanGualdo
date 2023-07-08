import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KgButtonNavModule } from 'src/app/ui/kg-button-nav/kg-button-nav.module';
import { KgButtonModule } from 'src/app/ui/kg-button/kg-button.module';
import { KgNavigationBarModule } from 'src/app/ui/kg-navigation-bar/kg-navigation-bar.module';
import { PreviewComponentsComponent } from './preview.component';

@NgModule({
  declarations: [PreviewComponentsComponent],
  imports: [
    CommonModule,
    KgNavigationBarModule,
    KgButtonModule,
    KgButtonNavModule,
  ],
})
export class PreviewComponentsModule {}
