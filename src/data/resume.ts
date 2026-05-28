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

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  education: EducationEntry[];
  projects: Project[];
  stack: StackItem[];
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
        "Security, compliance, and technology for a mid-size financial services firm. Hybrid on-prem and cloud.",
      bullets: [
        "Built the defense-in-depth security program from scratch. IAM, EDR, DLP, PKI, network security, 24×7 SOC. Seven years without a major incident.",
        "Created the company's SOC 2 Type II, PCI-DSS, and HIPAA programs where none existed. Designed the controls, wrote the policy library, set the audit scope. Hit every certification on the first try.",
        "10+ audits, zero material findings. Quarterly vulnerability assessments and pen tests, tracked to closure.",
        "Took uptime from ~95% to 99.99%. Quarterly DR/BC tests against aggressive RPO and RTO targets.",
        "Designed an AI compliance monitoring platform that replaced manual spot-checking with full-coverage disclosure verification and sentiment analysis on customer calls. Caught the blind spots sampling left behind and gave managers their week back.",
        "Strategic advisor to ownership on risk, org design, and operational efficiency. The conversations go past technology.",
        "Technical authority on RFPs, security questionnaires, and contract terms. I present to prospective regulated clients and handle the legal, auditor, and regulator side.",
        "Cut technology spend significantly through architecture rationalization and vendor consolidation while the company grew through it.",
        "Build AI ops tooling: agentic workflows that monitor, remediate, and report on their own. Anything risky comes back for approval.",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "2016 – August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Led the WannaCry ransomware recovery with no DR plan, no golden images, no documented procedures. Pulled together an ad-hoc response across the team and outside vendors. Restored full operations in 48 hours.",
        "Turned the incident into the trigger for building formal disaster recovery, business continuity, and security monitoring programs.",
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
        "Designed and deployed the enterprise domain, network segmentation, servers, and the security controls that everything else was built on.",
        "Brought in PowerShell and Python and made automation the default.",
      ],
    },
    {
      role: "Systems Administrator",
      company: "RTR Financial Services, Inc.",
      period: "2012 – 2014",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Took sole ownership of enterprise IT. The network was barely managed, with no security controls and no documented policies.",
      ],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 – 2012",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Analyzed business processes across the revenue side of the company. The cross-functional view shaped how I approached technology and security later.",
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
        "Defense-in-Depth",
        "Policy Authoring",
        "Audit Management",
        "Vendor Risk",
        "Incident Response",
      ],
    },
    {
      name: "Infrastructure and Cloud",
      skills: [
        "Hybrid Cloud",
        "VDI / Remote Workforce",
        "Disaster Recovery",
        "Business Continuity",
        "VMware vSphere",
        "Active Directory",
        "Network Architecture",
        "Cloud Migration",
      ],
    },
    {
      name: "Engineering and Automation",
      skills: [
        "PowerShell",
        "Python",
        "Infrastructure as Code",
        "CI/CD",
        "Kubernetes",
        "Docker",
        "AI Systems",
        "Agentic Workflows",
      ],
    },
    {
      name: "Executive Leadership",
      skills: [
        "Strategic Advisory",
        "Budget Management",
        "Vendor Negotiation",
        "Organizational Scaling",
        "Revenue Enablement",
        "Team Leadership",
        "Regulator Liaison",
        "Operations Management",
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
        "AI platform that replaces manual spot-checking with full-coverage legal disclosure verification and sentiment analysis on customer calls. Catches the compliance gaps that sampling misses.",
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
      url: "",
    },
    {
      name: "LLM-Wiki",
      category: "AI",
      url: "",
    },
  ],
};
