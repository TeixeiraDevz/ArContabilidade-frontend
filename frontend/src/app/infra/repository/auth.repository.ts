import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { LoginRequest, LoginResponse, Usuario } from '../../core/models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.post<LoginResponse>('/auth/login', credentials);
  }

  logout(): Observable<void> {
    return this.post<void>('/auth/logout', {});
  }

  validateToken(): Observable<Usuario> {
    return this.get<Usuario>('/auth/validate');
  }

  refreshToken(): Observable<LoginResponse> {
    return this.post<LoginResponse>('/auth/refresh', {});
  }
}
