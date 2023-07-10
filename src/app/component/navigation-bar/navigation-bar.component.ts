import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationBarService } from '../../api/src/lib/navigation-bar/public-api';
import { NavigationBarHttpService } from './navigation-bar.service';
import * as NavigationBarType from './navigation-bar.type';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly navigationBarHttpService: NavigationBarHttpService,
    private readonly navigationBarService: NavigationBarService
  ) {}
  navigationBar: NavigationBarType.NavigationBar = [];

  navigate(url_string: string) {
    this.router.navigate([url_string]);
  }

  ngOnInit(): void {
    // Navigazione da api BE
    // this.navigationBarHttpService
    //   .getNavigationBar()
    //   .subscribe((navigationBar) => {
    //     console.log('Lettura secca da JsonDB:' + navigationBar.length);
    //     this.navigationBar = navigationBar;
    //   });
    this.navigationBarService
      .getNavigationBarLocal()
      .subscribe((navigationBar) => {
        console.log('Lettura con service api da Mocks:' + navigationBar.length);
        this.navigationBar = navigationBar;
      });

    // Navigazione da api JsonDb
    // this.navigationBarService
    //   .getNavigationBarJsonDb()
    //   .subscribe((navigationBar) => {
    //     console.log(
    //       'Lettura cons service api da JsonDB:' + navigationBar.length
    //     );
    //     this.navigationBar = navigationBar;
    //   });
  }
}
