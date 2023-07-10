import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetEventiGareSuccessResponse,
  getEventiGareLocalEndpoint,
} from './endpoints/get-eventi-gare.endpoint';
import { EventiGare } from './eventi-gare.type';

@Injectable({
  providedIn: 'root',
})
export class EventiGareService {
  constructor(private readonly api: ApiService) {}

  getEventiGareLocal(): Observable<EventiGare> {
    return this.api.readLocal<GetEventiGareSuccessResponse>(
      getEventiGareLocalEndpoint()
    );
  }
}
