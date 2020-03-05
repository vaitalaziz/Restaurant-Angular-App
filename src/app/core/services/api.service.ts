import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // public get(url: string, `: HttpParams = new HttpParams()): Observable<any> {
  // return this.http.get(`${environment.baseUrl}${url}`, {params})

  public fetchList(url: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}${url}`)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }

  /**
   */
  /*
  public post(url: string, body: any = {}): Observable<any> {
    console.log('I am knocked');
    return this.http.post(`${environment.baseUrl}${url}`, body)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }
  */

  /**
   *
   * Here tying to append File so ..
   */
  public post(url: string, body: any= {}): Observable<any> {
    console.log('API kicked');
    console.log(`${environment.baseUrl}${url}`);
    return this.http.post(`${environment.baseUrl}${url}`, body)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }

  public findOne(url: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}${url}`)
    .pipe(
      map((res => {
        return res;
      })),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
