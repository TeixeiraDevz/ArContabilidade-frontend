import { CreateContactRequestDto } from '../dtos/create-contact-request.dto';
import { CreateContactResponseDto } from '../dtos/create-contact-response.dto';
import { ContactLeadMapper } from '../mappers/contact-lead.mapper';
import { ContactLeadRepository } from '../repositories/contact-lead.repository';

export class ContactLeadService {
  constructor(
    private readonly repository: ContactLeadRepository,
    private readonly mapper: ContactLeadMapper
  ) {}

  async create(input: CreateContactRequestDto): Promise<CreateContactResponseDto> {
    const domain = this.mapper.toDomainFromRequest(input);
    const persistence = this.mapper.toPersistenceDto(domain);
    const created = await this.repository.create(persistence);
    const createdDomain = this.mapper.toDomainFromPersistence(created);
    return this.mapper.toResponseDto(createdDomain);
  }

  async list(): Promise<CreateContactResponseDto[]> {
    const records = await this.repository.list();
    return records
      .map((item) => this.mapper.toDomainFromPersistence(item))
      .map((entity) => this.mapper.toResponseDto(entity));
  }
}
