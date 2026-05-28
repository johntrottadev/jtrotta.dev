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
    title: "Chief Technology & Security Officer",
    location: "NY / NJ",
    email: "johntrottadev@gmail.com",
    linkedin: "linkedin.com/in/johntrotta1",
    linkedinUrl: "https://linkedin.com/in/johntrotta1",
    github: "github.com/johntrottadev",
    githubUrl: "https://github.com/johntrottadev",
  },

  summary:
    "I build security and compliance programs where none exist, and they pass audits on the first try. I've done it in regulated financial services, from an empty network to a defense-in-depth operation with zero major incidents and a clean audit record across SOC 2, PCI, and HIPAA. I deploy AI systems that generate revenue and catch compliance failures before they become problems. I present to clients, close deals, advise ownership, and fix things that aren't in my job description. Operations management background, CISSP, and I still write code when it's the fastest path to the answer.",

  experience: [
    {
      role: "Chief Technology & Security Officer",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 – Present",
      location: "Staten Island, NY",
      description:
        "Executive owner of security, compliance, and technology for a regulated mid-size financial services firm operating across hybrid on-prem and cloud.",
      bullets: [
        "Built the defense-in-depth security program from scratch across IAM, EDR, DLP, PKI, network security, and 24×7 SOC. Zero major incidents in seven years.",
        "Stood up SOC 2 Type II, PCI-DSS, and HIPAA from nothing. Designed the control frameworks, authored the policy library, defined the audit scope. First-time certification on every program.",
        "Passed 10+ audits end-to-end with zero material findings.",
        "Drove uptime from ~95% to 99.99%. Lead quarterly DR/BC testing against aggressive RPO and RTO targets.",
        "Designed and shipped an AI compliance monitoring platform that replaced manual spot-checking with full-coverage legal disclosure verification and sentiment analysis on customer calls. Closed the compliance blind spots sampling could never catch and gave managers hours back every week.",
        "Trusted advisor to ownership on risk, organizational design, and operational efficiency across the business — not just the technology side.",
        "Technical authority on proposals, RFPs, security questionnaires, and contract terms. Present directly to prospective regulated clients. Primary liaison to legal, auditors, and regulators.",
        "Drove down technology spend through architecture rationalization and vendor consolidation, even as the company scaled through major growth.",
        "Build AI ops tooling: agentic workflows that monitor, remediate, and report on their own. Anything risky still comes back for approval.",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "2016 – August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Led the WannaCry ransomware recovery with no DR plan, no golden images, and no documented procedures. Coordinated an ad-hoc response across internal team and outside vendors. Restored full operations in 48 hours.",
        "Used the incident as the catalyst to stand up formal disaster recovery, business continuity, and security monitoring programs from scratch.",
        "Owned availability, security, patching, and compliance across every enterprise system and network.",
      ],
    },
    {
      role: "Infrastructure & Security Lead",
      company: "RTR Financial Services, Inc.",
      period: "2014 – 2016",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Designed and deployed enterprise domain architecture, network segmentation, server infrastructure, and the foundational security controls every program since has been built on.",
        "Established PowerShell and Python as the automation default — the operating model the company would scale on.",
      ],
    },
    {
      role: "Systems Administrator",
      company: "RTR Financial Services, Inc.",
      period: "2012 – 2014",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Assumed sole ownership of enterprise IT. Inherited a barely-managed network with no security controls and no documented policies.",
      ],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 – 2012",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Analyzed business processes and operational workflows across revenue-generating departments. The cross-functional fluency I built here later shaped how I approached technology and security.",
      ],
    },
  ],

  skillCategories: [
    {
      name: "Security and Compliance",
      skills: [
        "SOC 2 Type II",
        "PCI-DSS",
        "HIPAA",
        "Security Program Leadership",
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
        "Build vs. Buy",
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
    },
    {
      name: "OpsMan",
      description:
        "Semi-autonomous AI ops manager for the homelab. Watches ProxMox and Kubernetes, runs approved Day-2 operations, logs everything. Anything risky comes back for approval.",
      technologies: "Python, ProxMox API, Kubernetes API, Pushover",
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
