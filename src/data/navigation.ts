import { NavItem, DropdownItem, FooterLink } from '@/types/navigation';

export const serviceDropdownItems: DropdownItem[] = [
  {
    label: 'Community Planning',
    href: '/services/community-planning',
    iconName: 'Building2',
  },
  {
    label: 'Housing & Community Development',
    href: '/services/housing-community-development',
    iconName: 'Home',
  },
  {
    label: 'Zoning & Permitting',
    href: '/services/zoning-permitting',
    iconName: 'Compass',
    dividerAfter: true,
  },
  {
    label: 'Grants & Funding',
    href: '/services/grants-funding',
    iconName: 'DollarSign',
  },
  {
    label: 'RFP & Procurement',
    href: '/services/rfp-procurement',
    iconName: 'ClipboardCheck',
  },
  {
    label: 'Technical Assistance',
    href: '/services/technical-assistance',
    iconName: 'Map',
    dividerAfter: true,
  },
  {
    label: 'Government Technology',
    href: '/services/government-technology',
    iconName: 'Laptop',
  },
  {
    label: 'International Planning',
    href: '/services/international-planning',
    iconName: 'Globe2',
  },
];

export const mainNavItems: NavItem[] = [
  { label: 'Who We Are', href: '/who-we-are' },
  {
    label: 'Services',
    href: '/services',
    children: serviceDropdownItems,
  },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Where We Work', href: '/where-we-work' },
  { label: 'Meet Our Team', href: '/team' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'Contact Us', href: '/#contact', isCta: true },
];

export const footerLinks: FooterLink[] = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Services', href: '/services' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Where We Work', href: '/where-we-work' },
  { label: 'Meet Our Team', href: '/team' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'Contact', href: '/#contact' },
];
