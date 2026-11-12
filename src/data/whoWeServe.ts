export interface SectorItem {
  title: string;
  description: string;
  iconName?: string;
  checklist?: string[];
}

export const whoWeServeData = {
  metaDescription:
    'Baystate Planning serves local, state, and federal agencies, housing authorities, nonprofits, developers, and software companies across the United States.',
  eyebrow: 'Who We Serve',
  title: 'Who We Serve',
  heading: 'Planning support for the people who shape communities',
  subheading:
    'Public agencies and their partners face different rules, budgets, and timelines. We shape each project around the people who will use it.',
  ctaText: 'Let’s Work Together',
  ctaHref: '/#contact',
  sectors: [
    {
      title: 'Cities and Towns',
      iconName: 'Building2',
      description:
        'We help local staff and boards plan for growth, update zoning, pursue funding, and move projects through public approval.',
    },
    {
      title: 'Counties and Regional Agencies',
      iconName: 'Globe',
      description:
        'We support multi-jurisdiction planning, housing analysis, GIS mapping, and grant work that crosses local boundaries.',
    },
    {
      title: 'State and Federal Agencies',
      iconName: 'Landmark',
      description:
        'We provide housing policy analysis, program support, data review, and business requirements for public programs and systems.',
    },
    {
      title: 'Housing Authorities',
      iconName: 'Home',
      description:
        'We help housing authorities with policy, operations, compliance, funding, and software that fits how staff work each day.',
    },
    {
      title: 'Nonprofits and Community Organizations',
      iconName: 'HeartHandshake',
      description:
        'We help mission-driven groups document need, pursue funding, and turn community priorities into realistic projects.',
    },
    {
      title: 'Planners and Architects',
      iconName: 'Compass',
      description:
        'Local approvals can drag out for months over details that should have been simple. We handle the filings and hearing preparation so your team can focus on the project.',
      checklist: [
        'Special permit applications and variance filings',
        'Zoning compliance reviews and subdivision support',
        'Development review assistance and board hearing preparation',
        'Public project proposals and contract support',
        'Grant funding strategy for affordable and community projects',
        'Spatial mapping and site analysis for due diligence',
      ],
    },
    {
      title: 'Builders and Developers',
      iconName: 'HardHat',
      description:
        'We help you understand local rules early, prepare complete applications, and find funding for affordable and community projects.',
    },
    {
      title: 'Software Companies',
      iconName: 'Laptop',
      description:
        'We help technology teams build products that fit public workflows, housing rules, and procurement requirements.',
    },
  ] as SectorItem[],
};

