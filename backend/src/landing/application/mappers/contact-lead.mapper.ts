import { randomUUID } from 'node:crypto';
import { CreateContactRequestDto } from '../dtos/create-contact-request.dto';
import { CreateContactResponseDto } from '../dtos/create-contact-response.dto';
import {
  ContactLeadPersistenceDto,
  CreateContactLeadPersistenceDto
} from '../dtos/contact-lead-persistence.dto';
import { ContactLeadEntity } from '../../domain/entities/contact-lead.entity';

export class ContactLeadMapper {
  toDomainFromRequest(dto: CreateContactRequestDto): ContactLeadEntity {
    return new ContactLeadEntity(
      randomUUID(),
      dto.name.trim(),
      dto.email.trim().toLowerCase(),
      dto.phone.trim(),
      dto.company?.trim() || null,
      dto.message.trim(),
      new Date()
    );
  }

  toPersistenceDto(entity: ContactLeadEntity): CreateContactLeadPersistenceDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      company: entity.company,
      message: entity.message,
      createdAt: entity.createdAt.toISOString()
    };
  }

  toDomainFromPersistence(dto: ContactLeadPersistenceDto): ContactLeadEntity {
    return new ContactLeadEntity(
      dto.id,
      dto.name,
      dto.email,
      dto.phone,
      dto.company,
      dto.message,
      new Date(dto.createdAt)
    );
  }

  toResponseDto(entity: ContactLeadEntity): CreateContactResponseDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      company: entity.company,
      message: entity.message,
      createdAt: entity.createdAt.toISOString()
    };
  }
}
