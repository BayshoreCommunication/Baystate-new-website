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
    label: 'Grant Writing',
    href: '/services/grant-writing',
    iconName: 'FileText',
  },
  {
    label: 'Technical Assistance',
    href: '/services/technical-assistance',
    iconName: 'Map',
  },
  {
    label: 'International Planning',
    href: '/services/international-planning',
    iconName: 'Globe2',
    dividerAfter: true,
  },
  {
    label: 'GovTech & Housing Software',
    href: '/services/govtech-software',
    iconName: 'Laptop',
  },
];

export const mainNavItems: NavItem[] = [
  { label: 'Who We Are', href: '/#about' },
  {
    label: 'Services',
    href: '/services',
    children: serviceDropdownItems,
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/#contact', isCta: true },
];

export const footerLinks: FooterLink[] = [
  { label: 'Who We Are', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];
