import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventiComponent } from './eventi/eventi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'eventi', component: EventiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
