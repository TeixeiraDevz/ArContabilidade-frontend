export interface FacilitatorLinkDto {
  label: string;
  url: string;
}

export interface FacilitatorSectionDto {
  title: string;
  icon: string;
  links: FacilitatorLinkDto[];
}
