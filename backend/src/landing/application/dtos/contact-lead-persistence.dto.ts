export interface CreateContactLeadPersistenceDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  createdAt: string;
}

export interface ContactLeadPersistenceDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  createdAt: string;
}
