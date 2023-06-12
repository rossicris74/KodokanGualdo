import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  getNavigationBarEndpoint,
  GetNavigationBarSuccessResponse,
} from './endpoints/get-navigation-bar.endpoint';
import { NavigationBarType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class NavigationBarService {
  constructor(private readonly api: ApiService) {}

  getNavigationBar(): Observable<NavigationBarType.NavigationBar> {
    return this.api.readLocal<GetNavigationBarSuccessResponse>(
      getNavigationBarEndpoint()
    );
  }
}
