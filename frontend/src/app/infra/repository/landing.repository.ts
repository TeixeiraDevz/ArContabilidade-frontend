import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRepository } from './base.repository';
import {
  LandingContactRequestDto,
  LandingContactResponseDto
} from '../../core/models/landing-contact.model';

@Injectable({
  providedIn: 'root'
})
export class LandingRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  createContactLead(input: LandingContactRequestDto): Observable<LandingContactResponseDto> {
    return this.post<LandingContactResponseDto>('/api/landing/contacts', input);
  }
}
