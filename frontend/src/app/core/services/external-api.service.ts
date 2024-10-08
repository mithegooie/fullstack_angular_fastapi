import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, of } from 'rxjs';
import { ApiResponseModel, AppErrorModel, RequestConfigModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {

  constructor(private http: HttpClient) { }

  // callExternalApiWithAxios
  callExternalApi = (config: RequestConfigModel): Observable<ApiResponseModel> => {
    return this.http
      .request<unknown>(config.method, config.url, {
        headers: { ...config.headers },
      })
      .pipe(
        mergeMap((data) => {
          return of({
            data: data,
            error: null,
          });
        }),
        catchError((err) => {
          if (err.error && err.status) {
            return of({
              data: null,
              error: err.error,
            });
          }

          return of({
            data: null,
            error: {
              message: err.message,
            },
          });
        })
      );
  };
}
