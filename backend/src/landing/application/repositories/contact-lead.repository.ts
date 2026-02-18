import {
  ContactLeadPersistenceDto,
  CreateContactLeadPersistenceDto
} from '../dtos/contact-lead-persistence.dto';

export interface ContactLeadRepository {
  create(input: CreateContactLeadPersistenceDto): Promise<ContactLeadPersistenceDto>;
  list(): Promise<ContactLeadPersistenceDto[]>;
}
