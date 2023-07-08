import { Component, OnInit } from '@angular/core';
import * as KgNavigationBarType from '../../api/src/lib/navigation-bar/navigation-bar.type';
import { NavigationBarService } from '../../api/src/lib/navigation-bar/public-api';

@Component({
  selector: 'eventi',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponentsComponent implements OnInit {
  kgNavigationBar: KgNavigationBarType.NavigationBar = [];
  constructor(private readonly navigationBarService: NavigationBarService) {}

  ngOnInit(): void {
    this.onInitKgNavigationBar();
  }

  onInitKgNavigationBar() {
    this.navigationBarService
      .getNavigationBarLocal()
      .subscribe((navigationBar) => (this.kgNavigationBar = navigationBar));
  }
}
