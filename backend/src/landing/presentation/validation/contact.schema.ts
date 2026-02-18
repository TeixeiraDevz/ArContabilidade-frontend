import { z } from 'zod';

export const createContactSchema = z.object({
  name: z.string().trim().min(3).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(8).max(30),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5).max(2000)
});
