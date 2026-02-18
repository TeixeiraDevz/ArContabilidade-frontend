"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLeadEntity = void 0;
class ContactLeadEntity {
    id;
    name;
    email;
    phone;
    company;
    message;
    createdAt;
    constructor(id, name, email, phone, company, message, createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.message = message;
        this.createdAt = createdAt;
    }
}
exports.ContactLeadEntity = ContactLeadEntity;
