export interface CreateContactResponseDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  createdAt: string;
}
