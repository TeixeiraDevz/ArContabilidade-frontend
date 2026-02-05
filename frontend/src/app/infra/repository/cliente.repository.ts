import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { Cliente, ClienteDTO } from '../../core/models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Cliente[]> {
    return this.get<Cliente[]>('/clientes');
  }

  getById(id: string): Observable<Cliente> {
    return this.get<Cliente>(`/clientes/${id}`);
  }

  create(cliente: ClienteDTO): Observable<Cliente> {
    return this.post<Cliente>('/clientes', cliente);
  }

  update(id: string, cliente: ClienteDTO): Observable<Cliente> {
    return this.put<Cliente>(`/clientes/${id}`, cliente);
  }

  remove(id: string): Observable<void> {
    return super.delete<void>(`/clientes/${id}`);
  }

  search(query: string): Observable<Cliente[]> {
    return this.get<Cliente[]>(`/clientes/search?q=${encodeURIComponent(query)}`);
  }
}
