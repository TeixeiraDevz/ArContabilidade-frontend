export interface CreateContactRequestDto {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}
