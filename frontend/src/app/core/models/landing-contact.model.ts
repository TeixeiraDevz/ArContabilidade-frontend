export interface LandingContactRequestDto {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface LandingContactResponseDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  createdAt: string;
}
