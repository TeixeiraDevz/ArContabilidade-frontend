"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLeadMapper = void 0;
const node_crypto_1 = require("node:crypto");
const contact_lead_entity_1 = require("../../domain/entities/contact-lead.entity");
class ContactLeadMapper {
    toDomainFromRequest(dto) {
        return new contact_lead_entity_1.ContactLeadEntity((0, node_crypto_1.randomUUID)(), dto.name.trim(), dto.email.trim().toLowerCase(), dto.phone.trim(), dto.company?.trim() || null, dto.message.trim(), new Date());
    }
    toPersistenceDto(entity) {
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
    toDomainFromPersistence(dto) {
        return new contact_lead_entity_1.ContactLeadEntity(dto.id, dto.name, dto.email, dto.phone, dto.company, dto.message, new Date(dto.createdAt));
    }
    toResponseDto(entity) {
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
exports.ContactLeadMapper = ContactLeadMapper;
