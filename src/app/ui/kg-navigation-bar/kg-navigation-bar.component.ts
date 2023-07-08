import { Component, Input } from '@angular/core';
import * as KgNavigationBarType from '../../api/src/lib/navigation-bar/navigation-bar.type';

@Component({
  selector: 'kg-navigation-bar',
  templateUrl: './kg-navigation-bar.component.html',
  styleUrls: ['./kg-navigation-bar.component.css'],
})
export class KgNavigationBarComponent {
  @Input() kgNavigationBar: KgNavigationBarType.NavigationBar = [];
}
