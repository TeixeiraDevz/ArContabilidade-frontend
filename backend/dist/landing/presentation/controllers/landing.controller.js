"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingController = void 0;
const contact_schema_1 = require("../validation/contact.schema");
class LandingController {
    contactService;
    facilitatorService;
    constructor(contactService, facilitatorService) {
        this.contactService = contactService;
        this.facilitatorService = facilitatorService;
    }
    createContact = async (request, response) => {
        const payload = contact_schema_1.createContactSchema.parse(request.body);
        const created = await this.contactService.create(payload);
        response.status(201).json(created);
    };
    listContacts = async (_request, response) => {
        const data = await this.contactService.list();
        response.status(200).json(data);
    };
    listFacilitators = (_request, response) => {
        response.status(200).json(this.facilitatorService.list());
    };
}
exports.LandingController = LandingController;
