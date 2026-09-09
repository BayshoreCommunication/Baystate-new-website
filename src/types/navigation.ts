export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
  children?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  iconName: string;
  dividerAfter?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

