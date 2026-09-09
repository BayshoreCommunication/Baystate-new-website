import { BlogPost } from '@/types/blog';

export const blogCategories = [
  'All',
  'Housing Policy',
  'Zoning Reform',
  'GovTech & Software',
  'Grant Writing',
  'Climate Resilience',
  'Community Planning',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'navigating-mbta-communities-act',
    title: 'Navigating the MBTA Communities Act: A Practical Guide for Municipalities',
    excerpt:
      'How Massachusetts towns can balance state zoning mandates with local character, infrastructure capacity, and equitable housing goals.',
    content: [
      'Section 3A of the Massachusetts Zoning Act (the MBTA Communities law) requires 177 designated municipalities to establish at least one zoning district of reasonable size in which multi-family housing is permitted as of right. For many towns, this mandate has triggered intense debate between state compliance requirements and local planning concerns.',
      'From our work inside regional planning agencies and municipal boards, we know that successful compliance is not about simply rubber-stamping state guidelines. It requires thoughtful site selection, density modeling, and authentic public participation to build consensus.',
      'Communities that succeed first evaluate their existing water, sewer, and transportation infrastructure before drawing district boundaries. Identifying underutilized commercial corridors or downtown adjacent parcels often creates a win-win: revitalizing commercial hubs while satisfying density requirements without placing undue strain on residential neighborhoods.',
      'Furthermore, drafting clear dimensional standards — setbacks, height transitions, and design guidelines — provides communities with predictability and ensures that new multi-family development integrates seamlessly into the surrounding neighborhood fabric.',
    ],
    date: 'October 14, 2025',
    author: {
      name: 'Jasifa Chowdhury',
      role: 'Founder & Principal Planner',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Housing Policy',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Massachusetts town center with residential and commercial buildings',
    tags: ['MBTA Communities', 'Zoning Compliance', 'Affordable Housing', 'Massachusetts'],
    featured: true,
  },
  {
    slug: 'small-towns-federal-grants-cdbg-bric',
    title: 'How Small Municipalities Can Compete for Federal CDBG & BRIC Grants',
    excerpt:
      'Proven strategies for smaller towns and CDCs with limited staff to write winning federal applications and build long-term funding pipelines.',
    content: [
      'Smaller municipalities often feel shut out of large federal grant programs like HUD’s CDBG and FEMA’s BRIC (Building Resilient Infrastructure and Communities). With small administrative teams and no dedicated grant writer on staff, the sheer volume of compliance paperwork can feel insurmountable.',
      'However, federal review rubrics heavily favor projects that demonstrate acute vulnerability, clear community need, and regional collaboration. Small towns that partner with regional planning agencies or neighboring municipalities frequently outscore larger, standalone applications.',
      'When preparing an application, start with data-backed narratives. GIS mapping of floodplains, heat islands, and low-to-moderate-income (LMI) populations provides reviewers with the empirical justification required to award high scores.',
      'Finally, treat grant writing not as a one-off sprint before the deadline, but as a standing capital pipeline. Having ‘shovel-ready’ engineering plans and pre-documented community outreach files allows towns to mobilize quickly when notice of funding opportunities (NOFOs) are published.',
    ],
    date: 'November 2, 2025',
    author: {
      name: 'Amara Williams',
      role: 'Housing Policy & Grants Specialist',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Grant Writing',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Grant writing strategy documents and financial analysis',
    tags: ['Federal Grants', 'HUD CDBG', 'FEMA BRIC', 'Municipal Funding'],
  },
  {
    slug: 'bridging-policy-and-code-govtech-procurement',
    title: 'Bridging Policy and Code: What GovTech Startups Misunderstand About Municipal Procurement',
    excerpt:
      'Why slick software demos stall out in city halls, and how tech founders can align with real planning workflows and state statutory requirements.',
    content: [
      'Over the past decade, venture capital has poured into GovTech, bringing slick user interfaces to permitting, waitlist management, and public notices. Yet founders frequently complain that municipal sales cycles are painfully slow and procurement boards seem resistant to change.',
      'The disconnect is rarely about software quality — it is almost always about regulatory compliance. In local government, workflows are dictated by statutory timelines, public notice laws, and audit requirements. If a software platform cannot export audit-proof records or integrate with state-mandated GIS formats, planning directors cannot legally adopt it.',
      'Tech teams must bridge the vocabulary gap. A software developer thinks in terms of user funnels and relational database tables; a municipal planner thinks in terms of notice periods, abutter lists, and statutory decision windows.',
      'When software companies partner with experienced urban planners during the product scoping phase, they design platforms that fit directly into existing public hearing cycles, drastically accelerating procurement adoption.',
    ],
    date: 'December 18, 2025',
    author: {
      name: 'Daniel Osei',
      role: 'GovTech & Software Development Lead',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
    category: 'GovTech & Software',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Software code and civic technology dashboard review',
    tags: ['GovTech', 'Civic Tech', 'Procurement', 'Housing Software'],
  },
  {
    slug: 'climate-vulnerability-assessments-capital-planning',
    title: 'Climate Vulnerability Assessments: Turning Data into Actionable Capital Plans',
    excerpt:
      'Moving past static hazard maps to embed heat, stormwater, and sea-level rise resilience into everyday capital improvements.',
    content: [
      'Almost every coastal and riverine community in New England has commissioned a climate vulnerability assessment. But too often, those 200-page binders sit on shelves while municipal capital improvement plans continue business as usual.',
      'To make climate resilience operational, vulnerability data must be integrated directly into annual budgeting and public works schedules. When culvert replacements, road resurfacing, and municipal roof replacements are evaluated against 50-year rainfall projections, resilience becomes part of routine maintenance rather than an expensive standalone initiative.',
      'Environmental justice must also be centered. Frontline communities — often lower-income neighborhoods with high impervious surface coverage and minimal tree canopy — experience heat waves and stormwater backup at disproportionately high rates.',
      'By prioritizing green infrastructure, bioswales, and urban forestry in these vulnerable tracts, municipalities can achieve immediate equity milestones while satisfying federal Justice40 investment benchmarks.',
    ],
    date: 'January 9, 2026',
    author: {
      name: 'Sofia Reyes',
      role: 'Climate & Resilience Planning Specialist',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Climate Resilience',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Climate vulnerability and environmental analysis maps',
    tags: ['Climate Adaptation', 'Resilience Planning', 'Environmental Justice', 'Stormwater'],
  },
  {
    slug: 'revising-antiquated-zoning-bylaws',
    title: 'Revising Antiquated Zoning Bylaws to Unlock Affordable Housing Production',
    excerpt:
      'A tactical playbook for planning boards looking to streamline dimensional standards, parking minimums, and accessory dwelling unit (ADU) bylaws.',
    content: [
      'Across the country, post-war zoning bylaws continue to choke off missing-middle housing. Low density single-family mandates, excessive lot frontage requirements, and parking minimums drive up development costs and price out working families.',
      'Modernizing zoning bylaws does not require completely rewriting the code overnight. Incremental, surgical reforms often build stronger political buy-in and yield faster housing units.',
      'Key reforms include legalizing Accessory Dwelling Units (ADUs) as of right, reducing minimum lot sizes in serviced neighborhoods, and converting ground-floor retail mandates in low-foot-traffic areas into flexible live-work provisions.',
      'When planning boards present these changes with 3D massing visualizations and fiscal impact estimates, community members see that gentle density preserves neighborhood aesthetics while expanding options for young families and seniors seeking to downsize.',
    ],
    date: 'January 28, 2026',
    author: {
      name: 'Marcus Chen',
      role: 'Senior Consultant · Urban Planning & GIS',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Zoning Reform',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Architects and planners reviewing zoning plans and permits',
    tags: ['Zoning Bylaws', 'ADU', 'Missing Middle', 'Affordable Housing'],
  },
  {
    slug: 'community-engagement-beyond-the-hearing-room',
    title: 'Community Engagement in the Digital Age: Reaching Beyond the Hearing Room',
    excerpt:
      'Why evening public hearings fail working residents, and how multi-channel, culturally responsive engagement produces better planning outcomes.',
    content: [
      'For decades, standard municipal engagement has consisted of a 7:00 PM public hearing on a Tuesday evening in city hall. While open to everyone in theory, in practice this format selects for a narrow demographic: those with reliable transportation, child care, English fluency, and flexible schedules.',
      'Authentic community planning requires going to where residents already are. Mobile pop-up workshops at transit stations, multilingual digital surveys, weekend farmers market booths, and partnership with local faith-based organizations yield ten times the community feedback of traditional public hearings.',
      'Digital engagement tools — when combined with accessible offline outreach — allow shift workers, parents, and younger residents to contribute their priorities on their own time.',
      'When plans are built with broad community ownership, they face far fewer delays during adoption and represent the true aspirations of the entire town.',
    ],
    date: 'February 15, 2026',
    author: {
      name: 'Jasifa Chowdhury',
      role: 'Founder & Principal Planner',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Community Planning',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Inclusive community planning workshop and public outreach',
    tags: ['Community Engagement', 'Public Participation', 'Equity', 'Master Planning'],
  },
];

