export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle?: string;
  icon: string;
  iconName: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  shortDescription: string;
  tags: string[];
  overview: {
    badgeLabel: string;
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  included: {
    sectionLabel?: string;
    heading?: string;
    items: {
      icon: string;
      iconName?: string;
      title: string;
      description: string;
    }[];
  };
  audiences?: {
    sectionLabel?: string;
    heading?: string;
    items: {
      icon: string;
      iconName?: string;
      label: string;
    }[];
  };
  audienceCards?: {
    sectionLabel?: string;
    heading?: string;
    cards: {
      isDark?: boolean;
      label: string;
      title: string;
      points: string[];
    }[];
  };
  process?: {
    sectionLabel?: string;
    heading?: string;
    intro?: string;
    steps: {
      stepNum: string;
      title: string;
      description: string;
    }[];
  };
  fundingSources?: {
    sectionLabel?: string;
    heading?: string;
    cards: {
      title: string;
      examples: string;
    }[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

