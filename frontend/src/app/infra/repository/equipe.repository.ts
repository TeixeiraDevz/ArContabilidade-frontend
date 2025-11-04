import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { Membro, EquipeDTO } from '../../core/models/equipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Membro[]> {
    return this.get<Membro[]>('/equipe');
  }

  getById(id: string): Observable<Membro> {
    return this.get<Membro>(`/equipe/${id}`);
  }

  create(membro: EquipeDTO): Observable<Membro> {
    return this.post<Membro>('/equipe', membro);
  }

  update(id: string, membro: EquipeDTO): Observable<Membro> {
    return this.put<Membro>(`/equipe/${id}`, membro);
  }

  remove(id: string): Observable<void> {
    return super.delete<void>(`/equipe/${id}`);
  }

  getByEspecialidade(especialidade: string): Observable<Membro[]> {
    return this.get<Membro[]>(`/equipe/especialidade/${encodeURIComponent(especialidade)}`);
  }
}
