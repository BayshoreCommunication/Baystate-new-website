import {
  CredentialItem,
  ExtendedConsultant,
  CompanyValue,
  OpenRole,
} from '@/types/team';

export const teamPageConfig = {
  title: 'Meet Our Team',
  metaDescription:
    'Meet the Baystate Planning team of planners and policy specialists serving communities nationwide on housing, zoning, climate resilience, and grants.',
  heading: 'Every zoning line and housing policy shapes where real people live',
  subheading: 'Our planners and policy specialists never lose sight of that.',
};

export const founderData = {
  name: 'Jasifa Chowdhury',
  title: 'Founder and Principal Planner',
  subtitle: 'Urban Planner and Housing Policy Specialist',
  badgeNum: '10+',
  badgeLabel: 'Years in\nPlanning',
  image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  bio: [
    'Jasifa founded Baystate Planning & Consulting Group to help communities plan for stable housing and strong neighborhoods. She has more than 10 years of experience working with families, local leaders, and public agencies. She turns dense regulations into practical tools that staff and residents can use.',
    'Her work covers affordable housing policy, land use strategy, climate resilience, and federal grant writing. Whether she is studying a single city block or a multi-county region, she builds recommendations on solid data and genuine community needs.',
    'Jasifa combines technical expertise with direct community engagement. She works alongside clients to deliver solutions that serve residents and protect the environment.',
  ],
  backgroundNote:
    'Her background spans civil engineering and urban planning, and her work covers affordable housing, zoning and land use strategy, climate resilience, and grant writing.',
  expertise: [
    'Affordable Housing Policy',
    'Zoning & Land Use Strategy',
    'Climate Resilience',
    'Federal & State Grant Writing',
    'Civil Engineering Background',
    'Community Engagement',
    'HUD & Fair Housing Compliance',
    'Housing Authority Operations',
  ],
  credentials: [
    {
      icon: '🏛️',
      org: 'Central Massachusetts Regional Planning Commission',
      role: 'Regional planning leadership',
    },
    {
      icon: '🏘️',
      org: 'Cambridge Housing Authority',
      role: 'Affordable housing policy',
    },
    {
      icon: '🏙️',
      org: 'City of Cambridge Department of Housing and Community Development',
      role: 'Community development strategy',
    },
    {
      icon: '🏠',
      org: 'Vernon Housing Authority',
      role: 'Housing authority operations',
    },
    {
      icon: '🌴',
      org: 'City of Tampa',
      role: 'Local government experience',
    },
  ] as CredentialItem[],
};

export const consultantsData: ExtendedConsultant[] = [
  {
    name: 'Marcus',
    roleBadge: 'Senior Consultant',
    specialty: 'Spatial Analysis & Mapping',
    bio: 'Marcus brings 8 years of municipal experience to spatial analysis and mapping. He knows a single zoning line can decide where a corner store, a bus stop, or new housing can go. His maps give boards and planners a fair basis for land use decisions.',
    tags: ['Spatial Analysis', 'GIS & Mapping', 'Zoning Decisions'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Amara',
    roleBadge: 'Housing Specialist',
    specialty: 'Housing Authority Operations & Programs',
    bio: 'Amara has deep experience in housing authority operations. She cuts through administrative delays and helps agencies put available funding to work. She works to get federal and state housing programs to the families they were designed to serve.',
    tags: ['Housing Authority', 'Federal Programs', 'Funding Operations'],
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Daniel',
    roleBadge: 'Civic Technology',
    specialty: 'Public Technology & Portals',
    bio: 'Daniel helps public offices and residents connect through better technology. He builds simple portals and data tools so local governments can respond to residents faster and with less friction.',
    tags: ['Civic Tech', 'Public Portals', 'Data Tools'],
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Sofia',
    roleBadge: 'Senior Consultant',
    specialty: 'Climate Resilience & Vulnerability',
    bio: 'Sofia supports communities most exposed to climate change. She designs resilience strategies and pursues grant funding that helps vulnerable neighborhoods prepare for flooding, heat, and storms.',
    tags: ['Climate Resilience', 'Grant Funding', 'Vulnerability Strategy'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'James',
    roleBadge: 'International Planning',
    specialty: 'International Planning & Settlement Upgrading',
    bio: 'James has led planning work from Southeast Asia to Sub-Saharan Africa. He works directly with residents to upgrade informal settlements, building strategies that respect local culture and give communities a voice in how they grow.',
    tags: ['Settlement Upgrading', 'Global Strategy', 'Community Voice'],
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
];

export const couldBeYou = {
  title: 'Could Be You',
  description:
    'We are always looking for people who care about communities and want to do the work well. If that sounds like you, let’s talk.',
  ctaText: 'Let’s Talk',
  ctaHref: '/#contact',
};

export const extendedTeamIntro = {
  title: 'The Extended Team',
  description:
    'Every community has people working to solve its own planning challenges. We bring together specialists who know that a good plan matters only when it’s carried out. They stay close to the communities they serve and see projects through.',
};

export const companyValues: CompanyValue[] = [
  {
    icon: '⚖️',
    title: 'Equity First',
    description:
      'In many communities, working families, older adults, and people with disabilities can’t find a home they can afford. We begin housing work with that gap and the households it leaves out.',
  },
  {
    icon: '🎯',
    title: 'Technical Rigor',
    description:
      'We build on local parcel data, U.S. Census data, and the text of the laws that govern your community. Every figure in a plan traces to a source a board member can check.',
  },
  {
    icon: '🤝',
    title: 'Authentic Engagement',
    description:
      'We run meetings and surveys in the languages your residents speak. We schedule them at hours when renters and shift workers can attend.',
  },
  {
    icon: '💡',
    title: 'Creative Problem Solving',
    description:
      'Some cases don’t fit the standard code. We use overlay districts, incentive zoning, and special permits to solve them, drawing on experience from housing authorities and regional planning.',
  },
  {
    icon: '🌱',
    title: 'Long-Term Thinking',
    description:
      'We test plans against local hazard and climate risks and 20- to 30-year growth scenarios.',
  },
  {
    icon: '🔗',
    title: 'Partnership',
    description:
      'We train planning commissions, elected officials, and housing staff to run what we build, from GIS maps to housing trust procedures. Your team owns the work when we finish.',
  },
];

export const openRoles: OpenRole[] = [
  {
    title: 'Urban Planner for Housing and Zoning',
    type: 'Part-time and project-based work. Remote.',
    status: 'Open',
  },
  {
    title: 'GIS Analyst',
    type: 'Freelance and contract work. Remote.',
    status: 'Open',
  },
  {
    title: 'Grant Writer for Housing and Community Development',
    type: 'Part-time and contract work. Remote.',
    status: 'Open',
  },
  {
    title: 'International Planning Consultant',
    type: 'Project-based work. Remote.',
    status: 'Open',
  },
];
