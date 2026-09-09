import { ServiceItem } from '@/types/service';

export const servicesData: ServiceItem[] = [
  {
    slug: 'community-planning',
    title: 'Community Planning',
    icon: '🏙️',
    iconName: 'Building2',
    eyebrow: 'Service',
    heroDescription:
      'Strategic, long-range plans that guide growth, housing, transportation, and resilience — built with and for the communities they serve.',
    heroImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'Strategic plans that guide long-term growth, housing, transportation, and climate resilience across your community.',
    tags: [
      'Comprehensive Plans',
      'Long Range Plans',
      'Housing Plans',
      'Climate Resilience',
    ],
    overview: {
      badgeLabel: 'Overview',
      heading: 'Plans That Actually Get Used',
      paragraphs: [
        'Community planning is more than a document — it’s a roadmap that shapes how a place grows, changes, and responds to challenges over decades. At Baystate, we create plans that are grounded in data, shaped by genuine community engagement, and built to guide real decisions.',
        'With experience across municipal, regional, and state-level planning, our founder Jasifa Chowdhury has led comprehensive planning processes at the Central Massachusetts Regional Planning Commission and for multiple municipalities — resulting in adopted plans that communities actually implement.',
        'We combine technical rigor with approachable, inclusive community engagement so that every plan reflects the voices of the people it affects most.',
      ],
      image:
        'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Community planning session',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Planning Services We Provide',
      items: [
        {
          icon: '📋',
          iconName: 'FileText',
          title: 'Comprehensive Plans',
          description:
            'Full municipal master plans covering land use, housing, transportation, open space, economic development, and public utilities with a long-range vision.',
        },
        {
          icon: '🏠',
          iconName: 'Home',
          title: 'Housing Plans',
          description:
            'Housing production plans, Affordable Housing Trust plans, and housing needs assessments aligned with state and regional housing goals.',
        },
        {
          icon: '🗺️',
          iconName: 'Map',
          title: 'Long Range Plans',
          description:
            '20–30 year visioning documents that establish a clear direction for community growth, infrastructure investment, and land use priorities.',
        },
        {
          icon: '🌱',
          iconName: 'Leaf',
          title: 'Climate Action & Resilience Plans',
          description:
            'Municipal climate action plans, vulnerability assessments, and resilience strategies aligned with state climate mandates and FEMA frameworks.',
        },
        {
          icon: '🚌',
          iconName: 'Bus',
          title: 'Transportation & Mobility Plans',
          description:
            'Complete streets plans, transit access studies, bike/pedestrian master plans, and mobility frameworks that connect people to opportunity.',
        },
        {
          icon: '💼',
          iconName: 'Briefcase',
          title: 'Economic Development Plans',
          description:
            'Community economic development strategies, downtown revitalization plans, and business district studies that drive inclusive local growth.',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        { icon: '🏛️', iconName: 'Landmark', label: 'Municipalities & Towns' },
        { icon: '🌐', iconName: 'Globe', label: 'Regional Planning Agencies' },
        { icon: '🤝', iconName: 'Users', label: 'Nonprofits & CDCs' },
        { icon: '🏗️', iconName: 'Building', label: 'Developers & Architects' },
      ],
    },
    process: {
      sectionLabel: 'Our Approach',
      heading: 'How We Work',
      intro:
        'Every planning engagement follows a structured, transparent process that keeps stakeholders informed and communities empowered.',
      steps: [
        {
          stepNum: '01',
          title: 'Discovery & Assessment',
          description:
            'We review existing plans, data, and policies — and listen to understand your community’s unique context and priorities.',
        },
        {
          stepNum: '02',
          title: 'Community Engagement',
          description:
            'Public meetings, surveys, focus groups, and multilingual outreach to capture a full range of community voices.',
        },
        {
          stepNum: '03',
          title: 'Analysis & Drafting',
          description:
            'Data analysis, scenario modeling, and draft plan development — with regular check-ins and board presentations.',
        },
        {
          stepNum: '04',
          title: 'Adoption & Implementation',
          description:
            'We support the full adoption process and provide an implementation roadmap so the plan drives real action.',
        },
      ],
    },
    cta: {
      heading: 'Ready to Start Your Community Plan?',
      description:
        'Let’s talk about your community’s goals and how Baystate can help you get there.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'housing-community-development',
    title: 'Housing & Community Development',
    icon: '🏘️',
    iconName: 'Home',
    eyebrow: 'Service',
    heroDescription:
      'Affordable housing policy, compliance, and development strategy that expands access and strengthens communities across income levels.',
    heroImage:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'Affordable housing policy, development plans, HUD/FHA compliance, and housing market analysis.',
    tags: ['Affordable Housing', 'HUD/FHA', 'Housing Trust'],
    overview: {
      badgeLabel: 'Overview',
      heading: 'Expertise Built Inside Housing Authorities',
      paragraphs: [
        'Housing is one of the most complex intersections of policy, finance, regulation, and human need. Baystate’s founder, Jasifa Chowdhury, brings direct experience from the Cambridge Housing Authority, Vernon Housing Authority, and the City of Cambridge’s Department of Housing & Community Development.',
        'That insider knowledge means we understand both the regulatory frameworks housing authorities must navigate and the community needs that drive equitable housing policy — allowing us to deliver practical, implementable strategies.',
        'Whether you’re a municipality developing an affordable housing plan, a nonprofit navigating HUD compliance, or a developer pursuing affordable units, we provide the policy expertise to move your work forward.',
      ],
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Affordable housing development',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Housing Services We Provide',
      items: [
        {
          icon: '🏘️',
          iconName: 'Home',
          title: 'Affordable Housing Policy',
          description:
            'Policy analysis, inclusionary zoning recommendations, and affordable housing strategy development for municipalities and housing agencies.',
        },
        {
          icon: '📊',
          iconName: 'BarChart2',
          title: 'Housing Market Analysis',
          description:
            'Data-driven analysis of local housing supply, demand, affordability gaps, and market trends to inform planning and policy decisions.',
        },
        {
          icon: '📋',
          iconName: 'FileText',
          title: 'Affordable Housing Trust Plans',
          description:
            'Development and administration support for municipal Affordable Housing Trusts, including funding strategy and allocation frameworks.',
        },
        {
          icon: '🏛️',
          iconName: 'Landmark',
          title: 'HUD / FHA Compliance',
          description:
            'Compliance review, fair housing analysis, and regulatory guidance for housing authorities and developers working within federal programs.',
        },
        {
          icon: '🏗️',
          iconName: 'Building',
          title: 'Development Plans',
          description:
            'Site-level affordable housing development planning, including density analysis, financing strategy, and regulatory pathway mapping.',
        },
        {
          icon: '🤝',
          iconName: 'Users',
          title: 'Community Development Strategy',
          description:
            'Comprehensive community development plans integrating housing, economic opportunity, and social services for underserved neighborhoods.',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        { icon: '🏛️', iconName: 'Landmark', label: 'Housing Authorities' },
        { icon: '🏙️', iconName: 'Building2', label: 'Municipalities' },
        { icon: '🤝', iconName: 'Users', label: 'Nonprofits & CDCs' },
        {
          icon: '🏗️',
          iconName: 'Building',
          label: 'Affordable Housing Developers',
        },
      ],
    },
    process: {
      sectionLabel: 'Our Approach',
      heading: 'How We Work',
      intro:
        'We bring both policy depth and community perspective to every housing engagement — ensuring solutions are compliant, fundable, and genuinely equitable.',
      steps: [
        {
          stepNum: '01',
          title: 'Needs Assessment',
          description:
            'Data analysis of housing stock, affordability, demographics, and policy gaps to identify where intervention is most needed.',
        },
        {
          stepNum: '02',
          title: 'Policy & Regulatory Review',
          description:
            'Review of existing ordinances, HUD requirements, state housing law, and funding eligibility to map the regulatory landscape.',
        },
        {
          stepNum: '03',
          title: 'Strategy Development',
          description:
            'Co-creation of housing strategies with stakeholders — balanced for feasibility, equity, and political viability.',
        },
        {
          stepNum: '04',
          title: 'Implementation Support',
          description:
            'Ongoing advisory, board presentations, and coordination with state agencies to move plans into action.',
        },
      ],
    },
    cta: {
      heading: 'Let’s Build More Affordable Housing Together',
      description:
        'Connect with Baystate to discuss your housing challenge and how we can help.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'zoning-permitting',
    title: 'Zoning & Permitting',
    icon: '📐',
    iconName: 'Compass',
    eyebrow: 'Service',
    heroDescription:
      'Expert navigation of permits, variances, rezoning, and development review — from both sides of the planning board table.',
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'Special permits, variances, subdivisions, zoning/rezoning plans, and development review assistance that move projects forward.',
    tags: ['Special Permits', 'Variances', 'Rezoning', 'Dev Review'],
    overview: {
      badgeLabel: 'Overview',
      heading: 'We Know How Approvals Actually Work',
      paragraphs: [
        'Zoning and permitting is where projects either move forward or stall indefinitely. The difference is usually preparation — knowing what the board wants to see, how to frame a variance request, and what documentation makes an application airtight.',
        'Baystate’s team has worked inside planning departments and zoning boards, which means we understand the approval process from the inside. We prepare applications that anticipate objections, satisfy regulatory requirements, and minimize costly back-and-forth.',
        'Whether you’re a developer seeking a special permit, an architect navigating a rezoning for a client, or a municipality updating its zoning bylaws, we provide the planning expertise to get it done right.',
      ],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Zoning review meeting',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Zoning Services We Provide',
      items: [
        {
          icon: '📝',
          iconName: 'FileEdit',
          title: 'Special Permit Applications',
          description:
            'End-to-end preparation of special permit applications including site analysis, findings, narrative, and supporting documentation.',
        },
        {
          icon: '⚖️',
          iconName: 'Scale',
          title: 'Variance Filings',
          description:
            'Dimensional and use variance requests with legal findings analysis, hardship documentation, and board presentation support.',
        },
        {
          icon: '🗺️',
          iconName: 'Map',
          title: 'Subdivision Plans',
          description:
            'Preliminary and definitive subdivision plan review and preparation, coordinating with engineers, surveyors, and planning boards.',
        },
        {
          icon: '🔄',
          iconName: 'RefreshCw',
          title: 'Zoning & Rezoning',
          description:
            'Rezoning petitions, zoning bylaw amendments, overlay district creation, and map amendment support for municipalities and landowners.',
        },
        {
          icon: '🔍',
          iconName: 'Search',
          title: 'Development Review Assistance',
          description:
            'Site plan review, design review board preparation, and regulatory compliance analysis for commercial and residential projects.',
        },
        {
          icon: '📖',
          iconName: 'BookOpen',
          title: 'Zoning Bylaw Updates',
          description:
            'Comprehensive zoning code audits, bylaw modernization, and drafting of new zoning provisions for municipalities.',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        {
          icon: '🏗️',
          iconName: 'DraftingCompass',
          label: 'Architects & Designers',
        },
        {
          icon: '🏢',
          iconName: 'Building2',
          label: 'Real Estate Developers',
        },
        { icon: '🏛️', iconName: 'Landmark', label: 'Municipalities' },
        { icon: '🏠', iconName: 'Home', label: 'Landowners & Builders' },
      ],
    },
    process: {
      sectionLabel: 'Our Approach',
      heading: 'How We Work',
      intro:
        'We front-load the work that matters — so your application is complete, compliant, and compelling before it ever reaches the board.',
      steps: [
        {
          stepNum: '01',
          title: 'Regulatory Review',
          description:
            'We analyze the applicable zoning bylaw, overlay districts, and regulatory history for your parcel to identify the right approval path.',
        },
        {
          stepNum: '02',
          title: 'Application Preparation',
          description:
            'We draft the full application package — narrative, findings, plans, and supporting materials — tailored to your board’s standards.',
        },
        {
          stepNum: '03',
          title: 'Board Hearing Support',
          description:
            'We attend hearings, respond to board questions, and work with abutters to minimize opposition and build support.',
        },
        {
          stepNum: '04',
          title: 'Approval & Conditions',
          description:
            'We review conditions of approval, advise on compliance requirements, and ensure your approval is properly recorded.',
        },
      ],
    },
    cta: {
      heading: 'Ready to Move Your Project Through Permitting?',
      description:
        'Let’s talk about your project and the fastest path to approval.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'grant-writing',
    title: 'Grant Writing',
    icon: '📝',
    iconName: 'FileText',
    eyebrow: 'Service',
    heroDescription:
      'Strategic grant development and full application management for federal, state, municipal, and nonprofit funding programs.',
    heroImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'Strategic grant development for federal, state, municipal, and nonprofit programs — including full application management and compliance documentation.',
    tags: ['Federal Grants', 'State Funding', 'Compliance'],
    overview: {
      badgeLabel: 'Overview',
      heading: 'Funding Strategy That Actually Wins',
      paragraphs: [
        'Grant writing is a specialized skill that combines policy knowledge, storytelling, budget discipline, and regulatory expertise. Baystate has direct experience writing and managing grants at the municipal, state, and federal level — including HUD programs, state housing funds, climate grants, and economic development funding.',
        'We don’t just write — we help you identify the right funding opportunities, build a compelling narrative aligned with funder priorities, and manage the full application process from needs assessment to submission.',
        'Our approach is strategic: we focus on grants your organization can realistically win and can implement successfully — maximizing your return on the application investment.',
      ],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Grant writing and strategy',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Grant Services We Provide',
      items: [
        {
          icon: '🔍',
          iconName: 'Search',
          title: 'Funding Opportunity Research',
          description:
            'Identification of federal, state, and private funding opportunities aligned with your project goals, timeline, and organizational capacity.',
        },
        {
          icon: '📋',
          iconName: 'ClipboardCheck',
          title: 'Needs Assessment',
          description:
            'Data-driven documentation of community need — the foundation of any competitive grant application.',
        },
        {
          icon: '✍️',
          iconName: 'PenTool',
          title: 'Narrative Writing',
          description:
            'Compelling project narratives that speak the funder’s language, hit all scoring criteria, and tell a clear, persuasive story.',
        },
        {
          icon: '💰',
          iconName: 'DollarSign',
          title: 'Budget Development',
          description:
            'Detailed, compliant project budgets with matching fund documentation and cost-benefit framing.',
        },
        {
          icon: '📂',
          iconName: 'FolderCheck',
          title: 'Compliance Documentation',
          description:
            'Collection and preparation of all required compliance materials — environmental reviews, certifications, organizational docs.',
        },
        {
          icon: '📬',
          iconName: 'Send',
          title: 'Full Application Management',
          description:
            'End-to-end management of the submission process including portal navigation, deadline tracking, and post-award reporting.',
        },
      ],
    },
    fundingSources: {
      sectionLabel: 'Funding Sources',
      heading: 'Programs We Write For',
      cards: [
        {
          title: '🏛️ Federal Programs',
          examples:
            'HUD CDBG, HOME, NHTF · EPA Environmental Justice · FHWA Transportation · EDA Economic Development · USDA Rural Development',
        },
        {
          title: '🏠 State Housing Funds',
          examples:
            'MassHousing · DHCD Community Development · Housing Choice · Commonwealth Builder · Affordable Housing Trust Fund',
        },
        {
          title: '🌱 Climate & Resilience',
          examples:
            'BRIC · HMGP · EPA Climate Pollution Reduction · State climate resilience programs · Green infrastructure grants',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        { icon: '🏛️', iconName: 'Landmark', label: 'Municipalities & Towns' },
        { icon: '🤝', iconName: 'Users', label: 'Nonprofits & CDCs' },
        { icon: '🏘️', iconName: 'Home', label: 'Housing Authorities' },
        { icon: '🏗️', iconName: 'Building', label: 'Developers' },
      ],
    },
    cta: {
      heading: 'Ready to Secure Your Next Grant?',
      description:
        'Tell us about your project and the funding you’re pursuing — we’ll tell you if we can help you win it.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'technical-assistance',
    title: 'Technical Assistance',
    icon: '🗺️',
    iconName: 'Map',
    eyebrow: 'Service',
    heroDescription:
      'GIS mapping, data analysis, dashboards, and policy support — targeted analytical tools to help communities and organizations make smarter decisions.',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'GIS mapping, spatial analysis, data forecasting, dashboards, policy review, and community engagement support for informed decisions.',
    tags: ['GIS & Mapping', 'Data Analysis', 'Dashboards'],
    overview: {
      badgeLabel: 'Overview',
      heading: 'Data & Analysis That Drives Real Decisions',
      paragraphs: [
        'Planning decisions need to be grounded in evidence. Our technical assistance services give municipalities, nonprofits, and developers access to the analytical tools and expertise that typically only large agencies can afford in-house.',
        'From GIS mapping and spatial analysis to regulatory policy review and community engagement support, we provide targeted, right-sized technical support that helps organizations move from questions to confident decisions.',
        'We’re also uniquely positioned to bridge the gap between planning data and software systems — helping GovTech clients understand the data standards and structures that government users need.',
      ],
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Data analysis and GIS mapping',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Technical Services We Provide',
      items: [
        {
          icon: '🗺️',
          iconName: 'Map',
          title: 'GIS Mapping & Spatial Analysis',
          description:
            'Custom mapping, parcel analysis, zoning overlays, and spatial data visualization for planning and development decisions.',
        },
        {
          icon: '📊',
          iconName: 'TrendingUp',
          title: 'Data Analysis & Forecasting',
          description:
            'Demographic projections, housing needs forecasting, economic analysis, and trend modeling to inform long-range planning.',
        },
        {
          icon: '📜',
          iconName: 'Scroll',
          title: 'Regulatory & Policy Review',
          description:
            'Analysis of zoning bylaws, state regulations, federal requirements, and local ordinances for compliance and opportunity gaps.',
        },
        {
          icon: '🤝',
          iconName: 'Users',
          title: 'Community Engagement Support',
          description:
            'Survey design, public meeting facilitation, multilingual outreach materials, and engagement data synthesis.',
        },
        {
          icon: '📝',
          iconName: 'FileText',
          title: 'Grant Technical Support',
          description:
            'Data gathering, needs documentation, and technical exhibits to strengthen grant applications.',
        },
        {
          icon: '📁',
          iconName: 'Folder',
          title: 'RFE / RFQ / RFP Assistance',
          description:
            'Technical writing, qualifications packages, and proposal development for government and nonprofit procurement processes.',
        },
        {
          icon: '📅',
          iconName: 'Calendar',
          title: 'Project Management Support',
          description:
            'Coordination support for multi-stakeholder planning projects — timelines, deliverable tracking, and meeting management.',
        },
        {
          icon: '📈',
          iconName: 'LineChart',
          title: 'Dashboards & Visualizations',
          description:
            'Interactive dashboards, infographics, and data visualizations that make planning data accessible to decision-makers and the public.',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        { icon: '🏛️', iconName: 'Landmark', label: 'Municipalities' },
        { icon: '🤝', iconName: 'Users', label: 'Nonprofits & CDCs' },
        { icon: '💻', iconName: 'Laptop', label: 'GovTech Companies' },
        {
          icon: '🏗️',
          iconName: 'Building',
          label: 'Developers & Architects',
        },
      ],
    },
    cta: {
      heading: 'Need Data-Driven Planning Support?',
      description:
        'Tell us what you’re trying to analyze or understand — we’ll find the right technical approach.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'international-planning',
    title: 'International Planning',
    icon: '🌍',
    iconName: 'Globe2',
    eyebrow: 'Service',
    heroDescription:
      'Global sustainable development, climate adaptation, and community resilience — supporting governments and NGOs in addressing complex urban challenges worldwide.',
    heroImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'Global sustainable development, climate adaptation, informal settlement upgrading, and SDG-aligned urban strategies supporting governments and NGOs.',
    tags: ['Climate Adaptation', 'SDG Alignment', 'NGO Support'],
    overview: {
      badgeLabel: 'Overview',
      heading: 'Global Experience, Community-Centered Practice',
      paragraphs: [
        'Urbanization, climate change, and housing informality are global challenges that require planners who can operate across cultural, regulatory, and institutional contexts. Baystate brings international planning experience combined with deep community engagement practice.',
        'We support governments, international development organizations, and NGOs working on sustainable urban development, climate resilience, and housing equity in cities around the world.',
        'Our approach is grounded in the belief that effective international planning must be culturally responsive, locally led, and aligned with both global frameworks like the SDGs and the realities on the ground.',
      ],
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'International urban planning',
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'International Services We Provide',
      items: [
        {
          icon: '🌱',
          iconName: 'Sprout',
          title: 'Climate Resilience & Adaptation',
          description:
            'Climate vulnerability assessments, adaptation strategies, and resilience planning for cities and communities facing climate risk.',
        },
        {
          icon: '🏘️',
          iconName: 'Home',
          title: 'Informal Settlement Upgrading',
          description:
            'In-situ upgrading strategies, land tenure support, infrastructure planning, and community-led development for informal settlements.',
        },
        {
          icon: '🌍',
          iconName: 'Globe',
          title: 'Global Housing Strategies',
          description:
            'National and city-level housing strategies addressing affordability, supply, finance access, and land use for diverse global contexts.',
        },
        {
          icon: '📈',
          iconName: 'TrendingUp',
          title: 'Urbanization & Growth Management',
          description:
            'Strategic plans for rapidly urbanizing cities managing population growth, infrastructure demand, and land use pressures.',
        },
        {
          icon: '🤝',
          iconName: 'HeartHandshake',
          title: 'Culturally Responsive Engagement',
          description:
            'Community engagement designed for diverse cultural contexts — multilingual, participatory, and adapted to local decision-making norms.',
        },
        {
          icon: '🎯',
          iconName: 'Target',
          title: 'SDG Alignment & Reporting',
          description:
            'Alignment of urban development programs with the UN Sustainable Development Goals, particularly SDG 11 (Sustainable Cities).',
        },
      ],
    },
    audiences: {
      sectionLabel: "Who It's For",
      heading: 'We Work With',
      items: [
        {
          icon: '🏛️',
          iconName: 'Landmark',
          label: 'National & Local Governments',
        },
        { icon: '🌐', iconName: 'Globe', label: 'International NGOs' },
        {
          icon: '🏦',
          iconName: 'Building',
          label: 'Development Finance Institutions',
        },
        {
          icon: '🎓',
          iconName: 'GraduationCap',
          label: 'Research & Academic Partners',
        },
      ],
    },
    cta: {
      heading: 'Working on a Global Urban Challenge?',
      description:
        'Tell us about your project and the communities you’re working with — we’d love to explore a collaboration.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
  {
    slug: 'govtech-software',
    title: 'GovTech & Housing Software Consulting',
    shortTitle: 'GovTech & Software',
    icon: '💻',
    iconName: 'Laptop',
    eyebrow: 'Service',
    heroDescription:
      'The planning expertise software developers and municipalities need to build products that work in the real world of government workflows and housing policy.',
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    shortDescription:
      'We bridge the gap between planning policy and technology. Whether you’re a software company building for municipalities or a town procuring a housing platform, we provide the planning expertise to make your product work in the real world.',
    tags: [
      'Housing Portals',
      'Waitlist Systems',
      'GIS Integration',
      'Gov Data Dashboards',
      'Software RFP/RFQ',
      'Policy Compliance',
    ],
    overview: {
      badgeLabel: 'Overview',
      heading: 'The Bridge Between Policy and Technology',
      paragraphs: [
        'Government technology fails when it’s built without understanding how planning and housing agencies actually operate. Baystate fills that gap — providing the planning domain expertise that helps software companies build products that fit real workflows, and helping municipalities find and procure the right tools.',
        'We’ve worked inside planning departments, housing authorities, and regional planning commissions. We know the data they use, the processes they follow, the regulations they’re bound by, and the procurement processes they must navigate.',
        'Whether you’re a developer building a housing waitlist platform or a town seeking to modernize your permitting system, we speak both languages — planning policy and software development.',
      ],
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'GovTech and software development',
    },
    audienceCards: {
      sectionLabel: 'Two Audiences, One Expertise',
      heading: 'Who We Help',
      cards: [
        {
          isDark: true,
          label: 'For Software Developers',
          title: 'Build Products That Work for Government',
          points: [
            'Translate HUD rules, zoning codes, and housing regulations into product requirements',
            'Map government workflows your software needs to fit into',
            'Define GIS data standards and housing data structures',
            'Review products for HUD/FHA and fair housing compliance before launch',
            'Connect your company with municipal and housing authority pilot partners',
            'Support RFP/RFQ responses to land public contracts',
          ],
        },
        {
          isDark: false,
          label: 'For Municipalities & Housing Authorities',
          title: 'Find & Deploy the Right Technology',
          points: [
            'Write technology RFPs that attract qualified vendors',
            'Evaluate vendor proposals against your planning and compliance needs',
            'Assess whether a platform fits your workflow before you sign',
            'Define data requirements and integration standards',
            'Manage implementation and staff transition planning',
            'Audit existing systems for regulatory gaps',
          ],
        },
      ],
    },
    included: {
      sectionLabel: "What's Included",
      heading: 'Services We Provide',
      items: [
        {
          icon: '🏛️',
          iconName: 'Landmark',
          title: 'Municipal Software Procurement',
          description:
            'RFP writing, vendor evaluation, and selection support for housing portals, permitting systems, and planning platforms.',
        },
        {
          icon: '📋',
          iconName: 'FileCheck',
          title: 'Policy-to-Product Translation',
          description:
            'Converting HUD rules, zoning bylaws, and housing regulations into clear, buildable software requirements.',
        },
        {
          icon: '🗄️',
          iconName: 'Database',
          title: 'Data Architecture Advisory',
          description:
            'GIS data standards, housing waitlist data structures, and reporting frameworks aligned with federal and state requirements.',
        },
        {
          icon: '✅',
          iconName: 'CheckSquare',
          title: 'Compliance Review',
          description:
            'Pre-launch and ongoing review of housing software for HUD/FHA compliance, fair housing requirements, and local regulations.',
        },
        {
          icon: '🤝',
          iconName: 'Handshake',
          title: 'Developer–Municipality Matchmaking',
          description:
            'Connecting GovTech companies with the right municipal and housing authority partners for pilots and contracts.',
        },
        {
          icon: '📝',
          iconName: 'FileText',
          title: 'RFE / RFQ Proposal Support',
          description:
            'Helping software companies respond to government solicitations with competitive, compliant qualifications packages.',
        },
      ],
    },
    cta: {
      heading: 'Building for Government? Let’s Talk.',
      description:
        'Whether you’re a developer or a municipality, we can help you get the technology piece right.',
      buttonText: 'Get In Touch',
      buttonHref: '/#contact',
    },
  },
];

