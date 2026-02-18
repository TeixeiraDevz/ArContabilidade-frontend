"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLeadService = void 0;
class ContactLeadService {
    repository;
    mapper;
    constructor(repository, mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    async create(input) {
        const domain = this.mapper.toDomainFromRequest(input);
        const persistence = this.mapper.toPersistenceDto(domain);
        const created = await this.repository.create(persistence);
        const createdDomain = this.mapper.toDomainFromPersistence(created);
        return this.mapper.toResponseDto(createdDomain);
    }
    async list() {
        const records = await this.repository.list();
        return records
            .map((item) => this.mapper.toDomainFromPersistence(item))
            .map((entity) => this.mapper.toResponseDto(entity));
    }
}
exports.ContactLeadService = ContactLeadService;
