import { Request, Response } from 'express';
import { ContactLeadService } from '../../application/services/contact-lead.service';
import { FacilitatorService } from '../../application/services/facilitator.service';
import { createContactSchema } from '../validation/contact.schema';

export class LandingController {
  constructor(
    private readonly contactService: ContactLeadService,
    private readonly facilitatorService: FacilitatorService
  ) {}

  createContact = async (request: Request, response: Response): Promise<void> => {
    const payload = createContactSchema.parse(request.body);
    const created = await this.contactService.create(payload);
    response.status(201).json(created);
  };

  listContacts = async (_request: Request, response: Response): Promise<void> => {
    const data = await this.contactService.list();
    response.status(200).json(data);
  };

  listFacilitators = (_request: Request, response: Response): void => {
    response.status(200).json(this.facilitatorService.list());
  };
}
