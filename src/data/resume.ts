export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  abbreviation: string;
  detail: string;
}

export interface EducationEntry {
  institution: string;
  school: string;
  degree: string;
  field: string;
  location: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string;
  url?: string;
}

export interface StackItem {
  name: string;
  category: string;
  url?: string;
}

export interface PressItem {
  publication: string;
  date: string;
  title: string;
  url: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  education: EducationEntry[];
  projects: Project[];
  stack: StackItem[];
  press: PressItem[];
}

export const resumeData: ResumeData = {
  contact: {
    name: "John Trotta",
    title: "I design and build technology, security, and AI programs for regulated industries.",
    location: "NY / NJ",
    email: "johntrottadev@gmail.com",
    linkedin: "linkedin.com/in/johntrotta1",
    linkedinUrl: "https://linkedin.com/in/johntrotta1",
    github: "github.com/johntrottadev",
    githubUrl: "https://github.com/johntrottadev",
  },

  summary:
    "I've spent 17 years in regulated financial services running security and technology programs end to end: strategy, execution, and the cross-functional coordination in between. I stood up PCI-DSS and SOC 2 Type II with HIPAA from nothing — first-time certification on each, mapped to NIST CSF, 10+ audits passed with zero material findings, zero major incidents over eight years. That work is security program execution: control rollouts across engineering and operations, third-party and vendor coordination, executive reporting to ownership, clients, legal, and regulators, and real-time trade-offs between security, delivery speed, and what the business can absorb. And I automate the work with LLMs: AI products that carry real revenue, compliance monitoring that replaced manual spot-checks with full coverage, and agentic workflows that run operations on their own. Operations background, CISSP and PMP, daily user of agentic AI, and I still write code when it's the fastest path to the answer.",

  experience: [
    {
      role: "Chief Technology & Security Officer",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 - Present",
      location: "Staten Island, NY",
      description:
        "Own technology, product, and operational systems for a regulated mid-size financial services firm running across hybrid on-prem and cloud. Full accountability for what gets built, how it runs, and the security and compliance behind it.",
      bullets: [
        "Built the company's first real disaster recovery and continuity and drove uptime to 99.99%, scaled the environment from 75 to 300 employees, and moved to multi-state remote operations in a week when COVID hit, opening up 8+ states.",
        "Stood up the company's security and compliance from nothing: PCI-DSS and SOC 2 Type II with HIPAA controls in scope, first-time certification on each, zero major incidents in eight years.",
        "Automated 80 to 100 hours of manual work a month across clerical, operations, and compliance, and cut technology spend roughly 30% through architecture rationalization and vendor consolidation while the business grew fourfold.",
        "Designed an AI phone system that turned a manual call workflow into a self-service revenue channel now worth an estimated 10% of company revenue, managing vendor development from conception to deployment. Thousands of calls a day, routed and handled automatically.",
        "Designed an AI call-monitoring platform across 65+ agents and thousands of daily calls: logging, sentiment, and automatic verification of required legal disclosures and consent, replacing manual spot-checks with full coverage and giving managers a real-time view they never had.",
        "Built the secure data flows the business runs on: site-to-site VPNs across data centers, API connections from internet-facing systems into isolated back ends, API and FTP transfers, and BI wired straight to production databases, all change-managed and auditable.",
        "The technical voice to ownership, clients, legal, and regulators: turn vague business problems into things that ship, and carry the proposals, RFPs, and security reviews that underpinned more than $10M in regulated-client revenue.",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "2016 - August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Ran the endpoint recovery when WannaCry hit: the incident plan covered servers and data only, with nothing for endpoints. Built a minimum-viable image carrying the tactical software the business needed, deployed it across several hundred PCs, and malware-scanned each machine before rejoining it to the domain. Full operations restored in 48 hours.",
        "Inherited a technology program that had been owned for years by a single outside consultant and began insourcing it, taking the environment over top down and rebuilding it in-house. That restructuring is what the CTSO role was created out of when the consultant wound down his practice in 2019.",
        "Owned availability, security, patching, and compliance across every enterprise system.",
      ],
    },
    {
      role: "Infrastructure & Security Lead",
      company: "RTR Financial Services, Inc.",
      period: "2014 - 2016",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Transformed how the existing environment was used: reworked current tools, standardized automation with PowerShell and Python, added new systems as extensions to what was already in place, and built the procedures to meet new client requirements.",
      ],
    },
    {
      role: "Systems Administrator",
      company: "RTR Financial Services, Inc.",
      period: "2012 - 2014",
      location: "Staten Island, NY",
      description: "",
      bullets: [],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 - 2012",
      location: "Staten Island, NY",
      description: "",
      bullets: [],
    },
  ],

  skillCategories: [
    {
      name: "Product & Systems",
      skills: [
        "Systems Thinking",
        "APIs & Integrations",
        "Data Flows & Pipelines",
        "Workflow Automation",
        "Requirements & Specs",
        "Instrumentation & Metrics",
        "SQL & BI Reporting",
        "Telephony & Comms Systems",
        "Build vs. Buy",
      ],
    },
    {
      name: "Security and Compliance",
      skills: [
        "SOC 2 Type II",
        "PCI-DSS",
        "HIPAA",
        "NIST CSF",
        "Security Program Leadership",
        "Zero Trust Architecture",
        "Identity & Access Management",
        "AI Governance",
        "Policy Authoring",
        "Audit Management",
        "Third-Party Risk Management",
        "Incident Response",
      ],
    },
    {
      name: "Infrastructure and Cloud",
      skills: [
        "Hybrid Cloud Strategy",
        "Cloud Migration",
        "Kubernetes & Containers",
        "VDI & Remote Workforce",
        "Disaster Recovery",
        "Business Continuity",
        "Enterprise Architecture",
        "Technology Modernization",
        "IT Service Management",
      ],
    },
    {
      name: "Engineering and Automation",
      skills: [
        "AI Strategy",
        "AI-Driven Operations",
        "Agentic Workflows",
        "Process Automation",
        "Infrastructure as Code",
        "CI/CD",
        "Engineering Velocity",
      ],
    },
    {
      name: "Executive Leadership",
      skills: [
        "Strategic Advisory to Ownership",
        "Technology Budget Management",
        "Vendor Negotiation",
        "Organizational Scaling",
        "Revenue Enablement",
        "Team Leadership",
        "Regulator Liaison",
        "Lean Operations Management",
      ],
    },
  ],

  certifications: [
    {
      name: "Certified Information Systems Security Professional",
      abbreviation: "CISSP",
      detail: "ISC2",
    },
    {
      name: "Project Management Professional",
      abbreviation: "PMP",
      detail: "PMI",
    },
    {
      name: "VMware Certified Professional",
      abbreviation: "VCP",
      detail: "Data Center Virtualization 6.7",
    },
    {
      name: "Microsoft Certified Solutions Expert",
      abbreviation: "MCSE",
      detail: "Windows Server Security and Core Infrastructure",
    },
    {
      name: "Cisco Certified Network Associate",
      abbreviation: "CCNA",
      detail: "Implementing and Administering Cisco Solutions",
    },
  ],

  education: [
    {
      institution: "CUNY Baruch College",
      school: "Zicklin School of Business",
      degree: "Bachelor of Business Administration",
      field: "Operations Management",
      location: "New York, NY",
    },
  ],

  projects: [
    {
      name: "AI Phone System (IVR)",
      description:
        "An AI-driven phone system that turned a manual, rules-based call workflow into a self-service revenue channel. Handles thousands of calls a day with routing, self-service, and follow-up. Contributes an estimated 10%+ of company revenue.",
      technologies: "Cloud Telephony, SIP, Python, LLM APIs, Speech-to-Text",
    },
    {
      name: "Compliance Monitoring Platform",
      description:
        "AI platform that replaced manual spot-checking with full-coverage legal disclosure verification and sentiment analysis on customer calls. Closed the compliance blind spots that sampling could never catch.",
      technologies: "Python, Speech-to-Text, LLM APIs, Sentiment Analysis",
    },
    {
      name: "Homelab",
      description:
        "Production-grade k3s cluster on ProxMox, GitOps-managed with Flux. Runs 25+ services across monitoring, automation, media, document management, and AI workloads. Bare metal.",
      technologies: "ProxMox, k3s, Flux, Kube-Prometheus, Velero, Loki",
      url: "https://github.com/johntrottadev/homelab",
    },
    {
      name: "OpsMan",
      description:
        "Semi-autonomous AI ops manager for the homelab. Watches ProxMox and Kubernetes, runs approved Day-2 operations, logs everything. Anything risky comes back for approval.",
      technologies: "Python, ProxMox API, Kubernetes API, Pushover",
      url: "https://github.com/johntrottadev/opsman",
    },
  ],

  stack: [
    {
      name: "Claude Code",
      category: "AI",
      url: "https://www.anthropic.com/claude-code",
    },
    {
      name: "PAI",
      category: "AI",
      url: "https://github.com/danielmiessler/Personal_AI_Infrastructure",
    },
    {
      name: "GSD",
      category: "AI",
      url: "https://github.com/open-gsd/get-shit-done-redux",
    },
    {
      name: "LLM-Wiki",
      category: "AI",
      url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    },
  ],

  press: [
    {
      publication: "AccountsRecovery.net",
      date: "April 2026",
      title: "AI 101: Back to the Basics",
      url: "https://www.accountsrecovery.net/courses/ai-101-back-to-the-basics-from-04-02-2026/",
    },
    {
      publication: "AccountsRecovery.net",
      date: "December 2025",
      title: "Getting to Know John Trotta of RTR Financial Services",
      url: "https://www.accountsrecovery.net/2025/12/11/getting-to-know-john-trotta-of-rtr-financial-services/",
    },
    {
      publication: "AccountsRecovery.net",
      date: "March 2025",
      title: "Teaching Prompt Engineering to Your Staff",
      url: "https://www.accountsrecovery.net/courses/teaching-prompt-engineering-to-your-staff-from-3-5-2025/",
    },
    {
      publication: "AccountsRecovery.net",
      date: "January 2025",
      title: "Using AI as a Research Tool and for Creation of Policies and Procedures",
      url: "https://www.accountsrecovery.net/courses/using-ai-as-a-research-tool-and-for-creation-of-policies-and-procedures-from-1-7-2025/",
    },
    {
      publication: "AccountsRecovery.net",
      date: "November 2024",
      title: "Artificial Intelligence: Empowering Human Agents for Better Efficiency",
      url: "https://www.accountsrecovery.net/courses/artificial-intelligence-empowering-human-agents-for-better-efficiency-from-11-6-2024/",
    },
    {
      publication: "AccountsRecovery.net",
      date: "Archive",
      title: "View all speaking engagements",
      url: "https://www.accountsrecovery.net/course-tag/john-trotta/",
    },
  ],
};
