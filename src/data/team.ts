import {
  CredentialItem,
  ExtendedConsultant,
  CompanyValue,
  OpenRole,
} from '@/types/team';

export const founderData = {
  name: 'Jasifa Chowdhury',
  title:
    'Founder & Principal Planner · Urban Planner & Housing Policy Specialist',
  badgeNum: '10+',
  badgeLabel: 'Years in\nPlanning',
  image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  bio: [
    'Jasifa Chowdhury founded Baystate Planning & Consulting to bring high-quality, equitable planning expertise to municipalities, nonprofits, and communities that need it most. With over 10 years of cross-sector experience in municipal, regional, and international planning, she has built a reputation for translating complex policy into actionable plans.',
    'Her work spans affordable housing policy, zoning and land use strategy, climate resilience, federal and state grant writing, and community engagement — across scales from individual neighborhoods to entire regions.',
    'Jasifa is known for her ability to bridge technical expertise with authentic community engagement — delivering solutions that are both rigorous and human-centered.',
  ],
  expertise: [
    'Affordable Housing Policy',
    'Zoning & Land Use',
    'Climate Resilience',
    'Grant Writing',
    'GIS & Spatial Analysis',
    'Community Engagement',
    'HUD/FHA Compliance',
    'International Planning',
  ],
  credentials: [
    {
      icon: '🏛️',
      org: 'Central Massachusetts Regional Planning Commission',
      role: 'Regional Planning — Municipal & Land Use Strategy',
    },
    {
      icon: '🏘️',
      org: 'Cambridge Housing Authority',
      role: 'Affordable Housing Policy & Compliance',
    },
    {
      icon: '🏙️',
      org: 'City of Cambridge — Dept. of Housing & Community Development',
      role: 'Community Development Strategy & Policy',
    },
    {
      icon: '🏠',
      org: 'Vernon Housing Authority',
      role: 'Housing Authority Operations & Planning',
    },
  ] as CredentialItem[],
};

export const consultantsData: ExtendedConsultant[] = [
  {
    name: 'Marcus Chen',
    roleBadge: 'Senior Consultant',
    specialty: 'Urban Planning & GIS',
    bio: 'Specializes in spatial analysis, zoning reform, and comprehensive plan mapping. Former regional planner with 8+ years of municipal experience.',
    tags: ['GIS & Mapping', 'Zoning Reform', 'Comp Plans'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Amara Williams',
    roleBadge: 'Housing Specialist',
    specialty: 'Housing Policy & Grants',
    bio: 'Expert in affordable housing financing, HUD programs, and CDBG/HOME grant management. Background in community development and housing authority operations.',
    tags: ['HUD Programs', 'Grant Writing', 'CDBG / HOME'],
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Daniel Osei',
    roleBadge: 'Tech & Software',
    specialty: 'GovTech & Software Development',
    bio: 'Builds civic technology for municipalities and housing authorities. Expert in permitting portals, housing dashboards, and government data systems.',
    tags: ['Civic Tech', 'Dashboards', 'Gov Portals'],
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Sofia Reyes',
    roleBadge: 'Senior Consultant',
    specialty: 'Climate & Resilience Planning',
    bio: 'Climate vulnerability specialist with expertise in resilience planning, BRIC/HMGP grants, and environmental justice frameworks for frontline communities.',
    tags: ['Climate Resilience', 'BRIC / HMGP', 'Env. Justice'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'James Okafor',
    roleBadge: 'International',
    specialty: 'International Development',
    bio: 'International planning consultant with deep experience in Sub-Saharan Africa and Southeast Asia. Specializes in informal settlement upgrading and SDG-aligned urban strategy.',
    tags: ['Global Dev', 'SDG 11', 'Settlement Upgrading'],
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
];

export const companyValues: CompanyValue[] = [
  {
    icon: '⚖️',
    title: 'Equity First',
    description:
      'Every plan we write considers who benefits and who has historically been left out. Equitable outcomes aren’t a checkbox — they’re the goal.',
  },
  {
    icon: '🎯',
    title: 'Technical Rigor',
    description:
      'We back every recommendation with data, policy analysis, and professional expertise. Our work holds up to scrutiny because we do the homework.',
  },
  {
    icon: '🤝',
    title: 'Authentic Engagement',
    description:
      'Community voices shape the best plans. We design engagement that actually reaches people — not just those who already show up to public meetings.',
  },
  {
    icon: '💡',
    title: 'Creative Problem-Solving',
    description:
      'We’re known for finding solutions that others miss. Complex challenges call for out-of-the-box thinking grounded in real-world experience.',
  },
  {
    icon: '🌱',
    title: 'Long-Term Thinking',
    description:
      'The decisions we help make today shape communities for decades. We plan with that weight in mind — and with optimism about what’s possible.',
  },
  {
    icon: '🔗',
    title: 'Partnership',
    description:
      'We don’t hand over a report and disappear. We work alongside our clients as true partners — sharing knowledge and building capacity along the way.',
  },
];

export const openRoles: OpenRole[] = [
  {
    title: 'Urban Planner — Housing & Zoning',
    type: 'Part-time / Project-based · Remote',
    status: 'Open',
  },
  {
    title: 'GIS Analyst',
    type: 'Freelance / Contract · Remote',
    status: 'Open',
  },
  {
    title: 'Grant Writer — Housing & Community Development',
    type: 'Part-time / Contract · Remote',
    status: 'Open',
  },
  {
    title: 'International Planning Consultant',
    type: 'Project-based · Remote',
    status: 'Open',
  },
];

