import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as NavigationBarType from './navigation-bar.type';

@Injectable({
  providedIn: 'root',
})
export class NavigationBarHttpService {
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getNavigationBar(): Observable<NavigationBarType.NavigationBar> {
    return this.http
      .get<NavigationBarType.NavigationBar>(
        'http://localhost:3000/NavigationBar'
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // // HttpClient API get() method => Fetch employee
  // getEmployee(id: any): Observable<Employee> {
  //   return this.http
  //     .get<Employee>(this.apiURL + '/employees/' + id)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // // HttpClient API post() method => Create employee
  // createEmployee(employee: any): Observable<Employee> {
  //   return this.http
  //     .post<Employee>(
  //       this.apiURL + '/employees',
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // // HttpClient API put() method => Update employee
  // updateEmployee(id: any, employee: any): Observable<Employee> {
  //   return this.http
  //     .put<Employee>(
  //       this.apiURL + '/employees/' + id,
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // // HttpClient API delete() method => Delete employee
  // deleteEmployee(id: any) {
  //   return this.http
  //     .delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
