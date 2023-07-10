import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KgNavigationBarEle } from '../kg-navigation-bar/kg-navigation-bar.types';

@Component({
  selector: 'kg-button-nav',
  templateUrl: './kg-button-nav.component.html',
  styleUrls: ['./kg-button-nav.component.css'],
})
export class KgButtonNavComponent {
  @Input() kgNavigationBarEle: KgNavigationBarEle = {
    navBarId: 0,
    navBarDesc: '',
    navBarLink: '',
    navBarClass: '',
  };
  @Output() onKgButNavClick = new EventEmitter<KgNavigationBarEle>();
}
