export type InsuranceArea = 'particular' | 'empresas';

export interface ModalityCoverage {
  name: string;
  detail?: string;
  isOptional?: boolean;
}

export interface Modality {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  coverages: ModalityCoverage[];
  exclusions?: string[];
  pricing?: string;
  target?: string;
  highlights?: { label: string; value: string; labelClass?: string }[];
}

export interface InsuranceCategory {
  id: string;
  name: string;
  icon: string; // Lucide icon identifier
  description: string;
  commercialPitch: string;
  accentColor: string; // Tailwind hex / class mapping
  modalities: Modality[];
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  area: InsuranceArea;
  category: string;
  modality?: string;
  companyName?: string;
  message?: string;
  submittedAt: string;
}
