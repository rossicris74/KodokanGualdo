import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetNavigationBarSuccessResponse,
  getNavigationBarJsonDbEndpoint,
  getNavigationBarLocalEndpoint,
} from './endpoints/get-navigation-bar.endpoint';
import { NavigationBarType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class NavigationBarService {
  constructor(private readonly api: ApiService) {}

  getNavigationBarLocal(): Observable<NavigationBarType.NavigationBar> {
    return this.api.readLocal<GetNavigationBarSuccessResponse>(
      getNavigationBarLocalEndpoint()
    );
  }
  getNavigationBarJsonDb(): Observable<NavigationBarType.NavigationBar> {
    return this.api.readJsonDb<GetNavigationBarSuccessResponse>(
      getNavigationBarJsonDbEndpoint()
    );
  }
}
