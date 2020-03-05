import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class CrudService<T> {
  constructor(
    protected apiService: ApiService,
    protected url: string
  ) { }

  /**
   * fetchAll() to call api service
   */
  public fetchAll(): Observable<T> {
    return this.apiService.fetchList(`${this.url}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  /**
   *
   * @param object pass the value to create new object
   */
  public createObject(object: T): Observable<T> {
    return this.apiService.post(`${this.url}/`, object);
  }

  /**
   *
   * @param id ????
   */
  public fetchOne(id: string): Observable<T> {
    return this.apiService.findOne(`${this.url}/${id}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}
