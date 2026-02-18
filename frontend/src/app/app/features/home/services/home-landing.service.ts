import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LandingContactRequestDto,
  LandingContactResponseDto
} from '../../../../core/models/landing-contact.model';
import { LandingRepository } from '../../../../infra/repository/landing.repository';

@Injectable({
  providedIn: 'root'
})
export class HomeLandingService {
  constructor(private readonly landingRepository: LandingRepository) {}

  sendContact(input: LandingContactRequestDto): Observable<LandingContactResponseDto> {
    return this.landingRepository.createContactLead(input);
  }
}
