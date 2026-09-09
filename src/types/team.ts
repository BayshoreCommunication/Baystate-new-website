export interface CredentialItem {
  icon?: string;
  org: string;
  role: string;
}

export interface ExtendedConsultant {
  name: string;
  roleBadge: string;
  specialty: string;
  bio: string;
  tags: string[];
  image: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface OpenRole {
  title: string;
  type: string;
  status: 'Open' | 'Closed';
}

