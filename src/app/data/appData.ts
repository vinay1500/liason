export const SERVICES_DATA = [
  "Get me a Counsel – Expert legal representation for arguments, high-stakes litigation, and specialized counsel for your specific legal needs",
  "Document review and compliance check – Comprehensive review of legal documents, contracts, and compliance verification to ensure regulatory adherence",
  "Legal Drafting – Professional drafting of contracts, agreements, notices, legal letters, and all documentation with precision and legal soundness",
  "Case Merit assessment and Case strategy – Detailed analysis of your case's strengths, weaknesses, winning probability, and strategic legal roadmap",
  "Litigation Monitoring - Shadow Counsel – Attend proceedings with your arguing counsel to ensure full understanding and provide strategic guidance throughout the case",
  "Liaison and Field support – Registry work, filing, police station visits, settlement negotiations, and on-ground legal facilitation",
  "Court technology and digital support – Advanced courtroom technology solutions, digital case management, and tech-enabled legal support services"
];

export const LEGAL_EXPERTISE_DATA = [
  {
    category: "Corporate, Commercial and Startups",
    description: "Requirements: “Transactional Lawyers” who are good at drafting, not just arguing in court",
    items: [
      "Contracts and agreements drafting and vetting",
      "Influencer/creator agreements",
      "Brand deals",
      "Exclusivity clauses",
      "IP ownership",
      "Contract Vetting: Reviewing Brand Collab agreements for exclusivity/perpetuity trap",
      "DMCA Takedown Service: Removing stolen content/fake profiles.",
      "Payment Recovery: Drafting formal Legal Notices for unpaid invoices",
      "Co-Founder Agreements",
      "Equity spits",
      "Vesting periods",
      "Exit clauses",
      "Service Legal Agreements (SLA) for vendors and IT service Providers",
      "Non-Disclosure Agreements (NDA) protecting trade secrets",
      "Franchise Agreements for businesses expanding via franchises",
      "Foreign Companies Market entry",
      "Incorporation and Registration",
      "FDI compliance",
      "Intellectual property (IPR)",
      "Trademark Registration for protecting brand names and logos",
      "Trademark Objection/Opposition reply",
      "Copyright Infringement: people stealing content/software"
    ]
  },
  {
    category: "Family and Matrimonial",
    description: "High emotional intelligence (EQ) and patience, not just aggressive arguing skills",
    items: [
      "Divorce proceedings",
      "Mutual consent divorces",
      "Contested divorce",
      "Criminal complaints in marriage",
      "Child custody and visitation",
      "Permanent custody",
      "Visitation rights",
      "Hague Convention cases (inter-country child abduction)",
      "Maintenance and Alimony",
      "RCR",
      "Nullity of marriage"
    ]
  },
  {
    category: "Property and Real Estate",
    description: "The 'High Value' Vertical - requires lawyers with strong local knowledge of land records and RERA expertise",
    items: [
      "RERA & Builder Disputes",
      "Delay in Possession: Compensation for late delivery of flats.",
      "Refund with Interest: Seeking full refund from builders for stalled projects.",
      "Execution of Order: Forcing the builder to pay after a court order is passed.",
      "Landlord & Tenant Disputes",
      "Eviction Suits: Removing illegal occupants or tenants who stop paying rent.",
      "Mesne Profits: Claiming market rent from a tenant staying illegally.",
      "Ancestral Property",
      "Partition Suits: Dividing joint family property among siblings/heirs.",
      "Declaration of Title: Fixing errors in title deeds or asserting ownership.",
      "Succession & Inheritance",
      "Probate of Will: Validating a will in court.",
      "Succession Certificate: For claiming movable assets of a deceased person.",
      "Letter of Administration: When no will exists."
    ]
  },
  {
    category: "Criminal Matters",
    description: "The 'Urgent' Vertical - requires 'street-smart' lawyers with good networks in police stations and lower courts",
    items: [
      "Bail Matters",
      "Anticipatory Bail: Pre-arrest bail (Section 438 CrPC).",
      "Regular Bail: Getting someone out of custody (Section 437/439 CrPC).",
      "Default Bail: If the police fail to file a chargesheet in 60/90 days.",
      "White Collar Crimes",
      "Cheque Bounce: Section 138 NI Act (Negotiable Instruments).",
      "Financial Fraud/EOW: Economic Offenses Wing cases (scams, embezzlement).",
      "Money Laundering (PMLA): ED (Enforcement Directorate) cases.",
      "Cyber Crime",
      "Online Harassment/Stalking: Filing complaints with Cyber Cell.",
      "Financial Cyber Fraud: Bank phishing, UPI scams.",
      "Data Theft: Employees stealing company data.",
      "Quashing Petitions",
      "Bail Cancellation",
      "FIR quashing",
      "FIR",
      "Trail Matter",
      "Fair Investigation",
      "Protection Petition",
      "Corruption Cases",
      "Motor Vehicle Act and Accident cases"
    ]
  },
  {
    category: "NRI Specific Services",
    description: "The 'Remote' Vertical - clients need 'facilitation' more than anyone else",
    items: [
      "Power of Attorney (PoA) Management: Drafting and adjudicating PoAs",
      "Property Management/Monitoring: Search Reports to ensure no encroachment",
      "Immigration/Blacklisting: Challenging Look Out Circulars",
      "Remote Divorce Management: Mutual consent divorce without travel.",
      "Property Protection: Periodically checking land records"
    ]
  },
  {
    category: "Civil & Consumer Disputes",
    description: "The 'Remedial' Vertical",
    items: [
      "Consumer Court",
      "Medical Negligence: Suing hospitals/doctors for botching treatment.",
      "Insurance Claims: Suing insurance companies for wrongfully rejecting claims.",
      "Defective Goods",
      "Money Recovery Suits: Fast-track recovery for written debt/invoices.",
      "Defamation",
      "Civil Defamation: Asking for damages for loss of reputation.",
      "Criminal Defamation: Asking for jail time for the offender."
    ]
  },
  {
    category: "Employment & Labor",
    description: "The 'Workplace' Vertical",
    items: [
      "Wrongful Termination: Challenging illegal firing of employees.",
      "Internal Complaints Committees (ICC) setting up or victims under POSH",
      "Gratuity & PF Disputes: Claiming unpaid post-retirement benefits"
    ]
  }
];

export const CAREERS_DATA = [
  "Interns",
  "Advocates",
  "Other Hirings"
];

export const SEARCHABLE_ITEMS = [
  ...SERVICES_DATA,
  ...LEGAL_EXPERTISE_DATA.flatMap(cat => [cat.category, ...cat.items]),
  ...CAREERS_DATA
];

export const BLOG_CATEGORIES = [
  'All',
  'Corporate Law',
  'Family Law',
  'Property Law',
  'Criminal Law',
  'Employment Law',
  'Intellectual Property'
];

export const BLOG_TYPES = [
  'All',
  'Article',
  'Blog',
  'Podcast',
  'Opinion',
  'Client News'
];

export const BLOG_DATA = [
  {
    id: 'regulatory-compliance-2026',
    title: 'Navigating Regulatory Compliance in the Digital Age',
    excerpt: 'Understanding the evolving landscape of data protection and privacy regulations affecting modern businesses.',
    category: 'Corporate Law',
    type: 'Article',
    image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'March 8, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sarah Mitchell',
      title: 'Partner, Corporate Law',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'James Anderson',
        title: 'Senior Associate',
        image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>As we navigate through 2026, businesses face an increasingly complex regulatory landscape. The intersection of technology and law has created new challenges that require innovative solutions and strategic thinking.</p>
      
      <h2>The Changing Regulatory Environment</h2>
      <p>Global data protection regulations have evolved significantly over the past few years. Organizations must now contend with multiple jurisdictional requirements, each with its own nuances and enforcement mechanisms.</p>
      
      <h3>Key Compliance Areas</h3>
      <p>Companies should focus on several critical areas:</p>
      <ul>
        <li>Data privacy and protection measures</li>
        <li>Cross-border data transfer protocols</li>
        <li>AI and automated decision-making governance</li>
        <li>Cybersecurity incident response planning</li>
      </ul>
      
      <h2>Best Practices for Implementation</h2>
      <p>Successful compliance programs require a multi-faceted approach. Organizations should invest in both technological solutions and human expertise to build robust frameworks that can adapt to changing requirements.</p>
      
      <p>Regular audits and assessments are essential to identify gaps and ensure ongoing compliance. This proactive approach helps organizations avoid costly penalties and reputational damage.</p>
    `,
    references: [
      'General Data Protection Regulation (GDPR) - EU Regulation 2016/679',
      'California Consumer Privacy Act (CCPA) - California Civil Code Section 1798.100',
      'Digital Personal Data Protection Act, 2023 - India',
      'ISO/IEC 27001:2022 - Information Security Management'
    ],
    tags: ['Data Privacy', 'Compliance', 'Corporate Governance', 'Technology Law']
  },
  {
    id: 'high-net-worth-divorce',
    title: 'Asset Protection Strategies in High-Net-Worth Divorces',
    excerpt: 'Expert insights on safeguarding assets and navigating complex financial arrangements during divorce proceedings.',
    category: 'Family Law',
    type: 'Opinion',
    image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'March 5, 2026',
    readTime: '12 min read',
    author: {
      name: 'Michael Chen',
      title: 'Partner, Family Law',
      image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'Emily Roberts',
        title: 'Senior Counsel',
        image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>Divorce proceedings involving substantial assets require careful planning and strategic thinking. The complexity increases exponentially when dealing with international holdings, business interests, and diverse asset portfolios.</p>
      
      <h2>Understanding Asset Valuation</h2>
      <p>Accurate valuation is the cornerstone of any equitable settlement. This becomes particularly challenging when dealing with illiquid assets, private business interests, and complex investment structures.</p>
      
      <h3>Common Valuation Challenges</h3>
      <p>High-net-worth individuals often face unique challenges in asset valuation, including:</p>
      <ul>
        <li>Private company valuations and ownership interests</li>
        <li>International real estate holdings</li>
        <li>Cryptocurrency and digital assets</li>
        <li>Art collections and collectibles</li>
        <li>Trust structures and offshore accounts</li>
      </ul>
      
      <h2>Strategic Considerations</h2>
      <p>Protecting assets while ensuring fair distribution requires a delicate balance. Early engagement with experienced legal and financial advisors can make a significant difference in outcomes.</p>
      
      <p>Pre-nuptial and post-nuptial agreements remain the most effective tools for asset protection, but their enforcement varies significantly across jurisdictions.</p>
    `,
    references: [
      'Hindu Marriage Act, 1955 - Section 13',
      'Special Marriage Act, 1954',
      'Family Law Act 1975 - Australia',
      'Matrimonial Causes Act 1973 - UK'
    ],
    tags: ['Divorce', 'Asset Protection', 'High Net Worth', 'Family Law']
  },
  {
    id: 'rera-compliance-guide',
    title: 'RERA Compliance: A Comprehensive Guide for Developers',
    excerpt: 'Essential requirements and best practices for real estate developers under the Real Estate Regulatory Authority.',
    category: 'Property Law',
    type: 'Blog',
    image: 'https://images.unsplash.com/photo-1684335286201-2715b660eb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'March 1, 2026',
    readTime: '10 min read',
    author: {
      name: 'Priya Sharma',
      title: 'Senior Partner, Property Law',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'Rajesh Kumar',
        title: 'Associate Partner',
        image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>The Real Estate (Regulation and Development) Act, 2016 has transformed the Indian real estate sector. Understanding and complying with RERA requirements is essential for developers to avoid penalties and maintain buyer confidence.</p>
      
      <h2>Registration Requirements</h2>
      <p>All real estate projects exceeding 500 square meters or comprising more than eight apartments must be registered with the state RERA authority before advertising or accepting bookings.</p>
      
      <h3>Key Compliance Obligations</h3>
      <ul>
        <li>Maintain a separate escrow account for each project</li>
        <li>Use at least 70% of funds for land and construction costs</li>
        <li>Obtain occupancy certificate within declared timelines</li>
        <li>Provide accurate project information and regular updates</li>
        <li>Address buyer grievances through prescribed mechanisms</li>
      </ul>
      
      <h2>Penalties for Non-Compliance</h2>
      <p>RERA imposes strict penalties for violations, including project deregistration, monetary fines up to 10% of project cost, and potential imprisonment for repeat offenders.</p>
      
      <p>Developers should implement robust compliance frameworks and conduct regular audits to ensure adherence to all RERA provisions.</p>
    `,
    references: [
      'Real Estate (Regulation and Development) Act, 2016',
      'RERA Rules and Regulations by State Authorities',
      'Ministry of Housing and Urban Affairs Guidelines',
      'Supreme Court Judgments on RERA Implementation'
    ],
    tags: ['RERA', 'Real Estate', 'Property Law', 'Compliance', 'Developers']
  },
  {
    id: 'white-collar-crime-trends',
    title: 'Emerging Trends in White Collar Crime Prosecution',
    excerpt: 'Analysis of recent developments in financial fraud investigations and enforcement actions.',
    category: 'Criminal Law',
    type: 'Article',
    image: 'https://images.unsplash.com/photo-1758541213979-fe8c9996e197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'February 28, 2026',
    readTime: '15 min read',
    author: {
      name: 'David Thompson',
      title: 'Partner, Criminal Defense',
      image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'Anita Desai',
        title: 'Senior Associate',
        image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>White collar crime enforcement has intensified significantly in recent years. Regulatory authorities are leveraging advanced technologies and international cooperation to detect and prosecute financial crimes more effectively.</p>
      
      <h2>Technology-Enabled Investigations</h2>
      <p>Law enforcement agencies now utilize sophisticated data analytics, artificial intelligence, and machine learning tools to identify suspicious patterns and trace illicit financial flows across borders.</p>
      
      <h3>Common White Collar Offenses</h3>
      <ul>
        <li>Securities fraud and insider trading</li>
        <li>Money laundering and PMLA violations</li>
        <li>Corporate fraud and accounting irregularities</li>
        <li>Cybercrime and digital financial fraud</li>
        <li>Tax evasion and benami transactions</li>
      </ul>
      
      <h2>Defense Strategies</h2>
      <p>Early engagement with experienced criminal defense counsel is critical. Comprehensive internal investigations and proactive cooperation with authorities can significantly influence outcomes.</p>
      
      <p>Organizations should implement robust compliance programs and whistleblower mechanisms to detect and address potential violations before they escalate into criminal investigations.</p>
    `,
    references: [
      'Prevention of Money Laundering Act, 2002',
      'Indian Penal Code Sections 420, 463-477A',
      'Securities and Exchange Board of India Act, 1992',
      'Companies Act, 2013 - Fraud Provisions'
    ],
    tags: ['White Collar Crime', 'Financial Fraud', 'Criminal Law', 'Compliance']
  },
  {
    id: 'trademark-protection-digital',
    title: 'Trademark Protection in the Digital Marketplace',
    excerpt: 'Strategies for protecting brand identity and combating infringement in e-commerce and social media.',
    category: 'Intellectual Property',
    type: 'Blog',
    image: 'https://images.unsplash.com/photo-1658249682487-882436e01650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'February 25, 2026',
    readTime: '9 min read',
    author: {
      name: 'Lisa Wong',
      title: 'Partner, IP & Technology',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'Arjun Mehta',
        title: 'IP Counsel',
        image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>The digital economy has created new challenges for trademark owners. From counterfeit goods on e-commerce platforms to brand impersonation on social media, protecting intellectual property requires constant vigilance and strategic action.</p>
      
      <h2>Registration and Monitoring</h2>
      <p>Comprehensive trademark protection begins with proper registration across relevant classes and jurisdictions. Regular monitoring of online marketplaces and social media platforms is essential to detect unauthorized use.</p>
      
      <h3>Enforcement Mechanisms</h3>
      <ul>
        <li>DMCA takedown notices for unauthorized content</li>
        <li>Platform-specific reporting procedures</li>
        <li>Cease and desist letters to infringers</li>
        <li>Domain name dispute resolution (UDRP)</li>
        <li>Litigation when necessary</li>
      </ul>
      
      <h2>Preventive Measures</h2>
      <p>Proactive brand protection strategies should include regular trademark audits, employee training programs, and clear brand usage guidelines for authorized partners and distributors.</p>
      
      <p>Technology solutions like automated monitoring tools and blockchain-based authentication can help brands stay ahead of infringers in the fast-paced digital marketplace.</p>
    `,
    references: [
      'Trade Marks Act, 1999',
      'Copyright Act, 1957',
      'Information Technology Act, 2000',
      'WIPO Uniform Domain Name Dispute Resolution Policy'
    ],
    tags: ['Trademark', 'Intellectual Property', 'E-commerce', 'Brand Protection']
  },
  {
    id: 'employment-law-remote-work',
    title: 'Employment Law Considerations for Remote Workforces',
    excerpt: 'Legal implications of distributed teams and hybrid work arrangements in the post-pandemic era.',
    category: 'Employment Law',
    type: 'Article',
    image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    publishedDate: 'February 20, 2026',
    readTime: '11 min read',
    author: {
      name: 'Robert Williams',
      title: 'Partner, Employment Law',
      image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    relatedPeople: [
      {
        name: 'Maya Patel',
        title: 'Senior Associate',
        image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      }
    ],
    content: `
      <p>The shift to remote and hybrid work models has created complex legal questions for employers. From jurisdictional issues to data privacy concerns, organizations must navigate a new landscape of employment law considerations.</p>
      
      <h2>Contractual Frameworks</h2>
      <p>Remote work arrangements require clear contractual provisions addressing work location, equipment provision, data security obligations, and performance metrics.</p>
      
      <h3>Key Legal Issues</h3>
      <ul>
        <li>Jurisdiction and applicable labor laws</li>
        <li>Tax implications of cross-border employment</li>
        <li>Working time regulations and overtime</li>
        <li>Health and safety obligations</li>
        <li>Data protection and confidentiality</li>
      </ul>
      
      <h2>Compliance Strategies</h2>
      <p>Employers should conduct regular audits of remote work policies, ensure compliance with local labor laws in all jurisdictions where employees work, and implement robust systems for tracking working hours and productivity.</p>
      
      <p>Clear communication and documented policies are essential to prevent disputes and ensure legal compliance across distributed teams.</p>
    `,
    references: [
      'Industrial Disputes Act, 1947',
      'Shops and Establishments Acts (State-specific)',
      'Information Technology Act, 2000',
      'Occupational Safety, Health and Working Conditions Code, 2020'
    ],
    tags: ['Employment Law', 'Remote Work', 'Labor Compliance', 'Hybrid Work']
  }
];