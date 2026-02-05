import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../core/config/app-config';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRepository {
  protected readonly apiUrl = inject(APP_CONFIG).apiUrl;

  constructor(protected http: HttpClient) { }

  protected get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const headers = options?.headers ? options.headers : defaultHeaders;
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { headers });
  }

  protected post<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const headers = options?.headers ? options.headers : defaultHeaders;
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, { headers });
  }

  protected put<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const headers = options?.headers ? options.headers : defaultHeaders;
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body, { headers });
  }

  protected delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const headers = options?.headers ? options.headers : defaultHeaders;
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`, { headers });
  }
}
