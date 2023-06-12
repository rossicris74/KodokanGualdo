import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, first, tap, timeout } from 'rxjs/operators';
import { CustomTimeoutError } from '../../utils/utils.timeout.error';
import { UrlsProviderService } from './urls-provider.service';
// import { AbstractUrlsProvider } from '../core/api-module-url.provider';

/**
 * Injectable service to communicate with application API
 * This is a wrapper of HttpClient service that pre-populate params, headers, etc...
 * in order to be DRY as suggested by Angular documentation
 *
 * @see https://angular.io/guide/http#why-write-a-service
 *
 * This service should be used in other API service
 * @example
 * ```

 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private readonly urlsProviderService: UrlsProviderService,
    private readonly httpClient: HttpClient
  ) {}

  // create<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.post<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // createEditor<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.post<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // delete<Success>(endpoint: string, time = 60000): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.delete<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // deleteEditor<Success>(endpoint: string, time = 60000): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.delete<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // deleteWithBody<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.request<Success>(
  //       'delete',
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       {
  //         body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // deleteEditorWithBody<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.request<Success>(
  //       'delete',
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       {
  //         body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // readAsync<Success>(endpoint: string, time = 60000): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().asyncBeUrl}/${endpoint}`
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // readEditor<Success>(endpoint: string, time = 60000): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // update<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.put<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // updateAsync<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.post<Success>(
  //       `${this.urlsProvider.getUrls().asyncBeUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // updateEditor<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.put<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // upload<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.post<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // download<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       {
  //         responseType: 'blob' as 'json',
  //         ...body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadAsync<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().asyncBeUrl}/${endpoint}`,
  //       {
  //         responseType: 'blob' as 'json',
  //         ...body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadFilename<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<{ body: Success | null; filename: string }> {
  //   return callTimeout(
  //     this.httpClient
  //       .get<Success>(`${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`, {
  //         responseType: 'blob' as 'json',
  //         observe: 'response',
  //         ...body,
  //       })
  //       .pipe(
  //         map((resp) => {
  //           const header = resp.headers
  //             .get('Content-Disposition')
  //             ?.split(';')
  //             ?.find((el) => el.trim().startsWith('filename'))
  //             ?.split('=');
  //           const filename = header && header.length === 2 ? header[1] : '';
  //           return {
  //             body: resp.body,
  //             filename,
  //           };
  //         })
  //       ),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadEditor<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       {
  //         responseType: 'blob' as 'json',
  //         ...body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // previewDownloadEditor<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       {
  //         responseType: 'blob' as 'json',
  //         ...body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadEditorPostBlob<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<{ body: Success | null }> {
  //   return callTimeout(
  //     this.httpClient
  //       .post<Success>(
  //         `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //         body,
  //         {
  //           responseType: 'blob' as 'json',
  //           observe: 'response',
  //         }
  //       )
  //       .pipe(map((resp) => ({ body: resp.body }))),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadEditorPost<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.post<Success>(
  //       `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //       {
  //         responseType: 'blob' as 'json',
  //         ...body,
  //       }
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  // downloadFilenameEditor<Success, Body>(
  //   endpoint: string,
  //   body?: Body,
  //   time = 60000
  // ): Observable<{ body: Success | null; filename: string }> {
  //   return callTimeout(
  //     this.httpClient
  //       .get<Success>(
  //         `${this.urlsProvider.getUrls().editorRootUrl}/${endpoint}`,
  //         {
  //           responseType: 'blob' as 'json',
  //           observe: 'response',
  //           ...body,
  //         }
  //       )
  //       .pipe(
  //         map((resp) => {
  //           const header = resp.headers
  //             .get('Content-Disposition')
  //             ?.split(';')
  //             ?.find((el) => el.trim().startsWith('filename'))
  //             ?.split('=');
  //           const filename =
  //             header && header.length === 2 ? header[1].replace(/\"/g, '') : '';
  //           return {
  //             body: resp.body,
  //             filename,
  //           };
  //         })
  //       ),
  //     endpoint,
  //     time
  //   );
  // }

  // change<Success, Body>(
  //   endpoint: string,
  //   body: Body,
  //   time = 60000
  // ): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.patch<Success>(
  //       `${this.urlsProvider.getUrls().apiRootUrl}/${endpoint}`,
  //       body
  //     ),
  //     endpoint,
  //     time
  //   );
  // }

  readJsonDb<Success>(endpoint: string, time = 60000): Observable<Success> {
    const pippo: string = `${this.urlsProviderService.getJsonDbUrl()}/${endpoint}`;
    return callTimeout(
      this.httpClient.get<Success>(
        `${this.urlsProviderService.getJsonDbUrl()}/${endpoint}`
      ),
      endpoint,
      time
    );
  }

  readLocal<Success>(endpoint: string, time = 60000): Observable<Success> {
    return callTimeout(this.httpClient.get<Success>(endpoint), endpoint, time);
  }

  // readLocalBlob<Success>(endpoint: string, time = 60000): Observable<Success> {
  //   return callTimeout(
  //     this.httpClient.get<Success>(endpoint, {
  //       responseType: 'blob' as 'json',
  //     }),
  //     endpoint,
  //     time
  //   );
  // }
}

/**
 * time è il timeout delle chiamate in millisecondi. Se la chiamata impiega più del timeout viene
 * lanciato un CustomTimeoutError
 * Default 60000 millisecondi (un minuto)
 * se time = 0 timeout disattivato
 */
const callTimeout = <T>(
  call: Observable<T>,
  endpoint: string,
  time: number
): Observable<T> => {
  const val = time === 0 ? tap<T>() : timeout<T>(time);
  return call.pipe(
    val,
    first(),
    catchError((err) => {
      const error =
        err instanceof TimeoutError ? new CustomTimeoutError(endpoint) : err;
      return throwError(error);
    })
  );
};
