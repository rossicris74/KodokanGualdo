import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventiDivModule } from './component/eventi-div/eventi-div.module';
import { EventiModule } from './component/eventi/eventi.module';
import { HomeModule } from './component/home/home.module';
import { PreviewComponentsModule } from './component/preview-components/preview.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventiModule,
    EventiDivModule,
    HomeModule,
    HttpClientModule,
    PreviewComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
