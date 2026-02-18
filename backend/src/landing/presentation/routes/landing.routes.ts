import { Router } from 'express';
import { ContactLeadMapper } from '../../application/mappers/contact-lead.mapper';
import { ContactLeadService } from '../../application/services/contact-lead.service';
import { FacilitatorService } from '../../application/services/facilitator.service';
import { FileContactLeadRepository } from '../../infrastructure/repositories/file-contact-lead.repository';
import { LandingController } from '../controllers/landing.controller';

export function createLandingRouter(storageFilePath: string): Router {
  const router = Router();

  const repository = new FileContactLeadRepository(storageFilePath);
  const mapper = new ContactLeadMapper();
  const contactService = new ContactLeadService(repository, mapper);
  const facilitatorService = new FacilitatorService();
  const controller = new LandingController(contactService, facilitatorService);

  router.get('/facilitators', controller.listFacilitators);
  router.get('/contacts', controller.listContacts);
  router.post('/contacts', controller.createContact);

  return router;
}
