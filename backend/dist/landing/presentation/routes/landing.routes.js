"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLandingRouter = createLandingRouter;
const express_1 = require("express");
const contact_lead_mapper_1 = require("../../application/mappers/contact-lead.mapper");
const contact_lead_service_1 = require("../../application/services/contact-lead.service");
const facilitator_service_1 = require("../../application/services/facilitator.service");
const file_contact_lead_repository_1 = require("../../infrastructure/repositories/file-contact-lead.repository");
const landing_controller_1 = require("../controllers/landing.controller");
function createLandingRouter(storageFilePath) {
    const router = (0, express_1.Router)();
    const repository = new file_contact_lead_repository_1.FileContactLeadRepository(storageFilePath);
    const mapper = new contact_lead_mapper_1.ContactLeadMapper();
    const contactService = new contact_lead_service_1.ContactLeadService(repository, mapper);
    const facilitatorService = new facilitator_service_1.FacilitatorService();
    const controller = new landing_controller_1.LandingController(contactService, facilitatorService);
    router.get('/facilitators', controller.listFacilitators);
    router.get('/contacts', controller.listContacts);
    router.post('/contacts', controller.createContact);
    return router;
}
