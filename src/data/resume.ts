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
    title: "Technology and security leader for regulated financial services.",
    location: "NY / NJ",
    email: "johntrottadev@gmail.com",
    linkedin: "linkedin.com/in/johntrotta1",
    linkedinUrl: "https://linkedin.com/in/johntrotta1",
    github: "github.com/johntrottadev",
    githubUrl: "https://github.com/johntrottadev",
  },

  summary:
    "Technology and security leader with 18 years in regulated financial services, hands-on through today. I build and run the infrastructure and security program for a 300-employee firm — the full stack, from network and identity through compliance, detection, and AI in production. I've stood up security and compliance from nothing with a clean audit record, run point on the incidents that mattered, and turned vague business problems into systems that ship. CISSP and PMP, and I still write code when it's the fastest path to the answer.",

  experience: [
    {
      role: "Chief Technology & Security Officer",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 - Present",
      location: "Staten Island, NY",
      description:
        "Functioning as the company's CISO under a Chief Technology & Security Officer title. Own security, technology, and compliance for a 300-employee regulated financial services firm across hybrid on-prem and cloud, on a $2M budget: decide what gets built, build it with the team, and own how it runs. Report to ownership.",
      bullets: [
        "Built and run the security program as defense in depth: behavior-based EDR (SentinelOne) and ThreatLocker application allow-listing on the endpoint, DLP across the network and application layers, an email-security detection program, and SIEM-based monitoring with insider-threat alerting on new-hire risk signals. I set the coverage and priorities; the security engineers operate the stack. It has caught real phishing and flagged and removed real insider risk.",
        "Detected, investigated, and contained a third-party compromise that reached the environment through a vendor: scoped the blast radius and confirmed it went no further, remediated it, and closed the gap with tighter controls and vendor oversight.",
        "Stood up PCI-DSS and SOC 2 Type II with HIPAA controls from nothing, first-time certification on each, mapped to NIST CSF, 10+ audits with zero material findings, and wrote the incident-response plan and every security runbook from a blank page.",
        "Built an AI call-monitoring and compliance platform across 65+ agents and thousands of daily calls: sentiment grading and automatic verification of required legal disclosures and consent, replacing manual spot-checks with full coverage and automating 80 to 100 hours of manual work a month.",
        "Designed a two-zone AI phone system where the model never touches cardholder data, keeping the AI out of PCI scope: thousands of calls a day and a ~10% increase in program revenue. Segmented the network into isolated zones with MFA and least-privilege access across identity, devices, and data.",
        "Built the company's first real disaster recovery and continuity and drove uptime to 99.99%, scaled the environment from 75 to 300 employees, and moved to multi-state remote operations in a week when COVID hit, opening 8+ states.",
        "The technical voice to ownership, clients, legal, and regulators: turned vague business problems into systems that ship, and carried the proposals, RFPs, and security reviews behind eight-figure regulated-client revenue.",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "2016 - August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Led the endpoint response to the 2017 WannaCry outbreak: contained the estate, coordinated recovery, and restored full operations in 48 hours. Then closed the root cause — signature AV with no patching — with managed patching (WSUS), a domain GPO security baseline, behavior-based EDR, and LAPS.",
        "Took over a consultant-run environment and built the security function in-house — the in-sourcing the CTSO role was created from in 2019. Replaced a 30-minute manual account-provisioning process with a PowerShell workflow later compiled into the zero-touch tool HR uses today.",
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
      name: "Detection & Response",
      skills: [
        "Detection Engineering",
        "Incident Response",
        "EDR (SentinelOne)",
        "SIEM (Elastic)",
        "Threat Detection & Triage",
        "Phishing Response (KnowBe4)",
        "Insider-Threat Detection",
        "Microsoft 365 Security",
        "Purple Teaming",
      ],
    },
    {
      name: "Security & Compliance",
      skills: [
        "PCI-DSS",
        "SOC 2 Type II",
        "HIPAA",
        "NIST CSF",
        "Identity & Access Management",
        "LAPS",
        "Application Allow-Listing (ThreatLocker)",
        "DLP",
        "Network Segmentation & Least Privilege",
        "Policy & Runbook Authoring",
        "Audit Management",
        "Third-Party Risk Management",
        "Security Program Leadership",
      ],
    },
    {
      name: "Infrastructure & Cloud",
      skills: [
        "Hybrid Cloud",
        "Kubernetes & Containers",
        "Infrastructure as Code",
        "CI/CD",
        "Disaster Recovery",
        "Business Continuity",
        "VDI & Remote Workforce",
        "Enterprise Architecture",
      ],
    },
    {
      name: "Engineering & AI",
      skills: [
        "PowerShell",
        "Python",
        "AI in Production",
        "Agentic Workflows (Human-in-the-Loop)",
        "LLM Security (Two-Zone / Data-Boundary Design)",
        "AI Governance",
        "Process Automation",
        "APIs & Integrations",
        "SQL & BI Reporting",
      ],
    },
    {
      name: "Executive Leadership",
      skills: [
        "Strategic Advisory to Ownership",
        "Technology Budget Management",
        "Vendor Management",
        "Regulator & Client Liaison",
        "Organizational Scaling",
        "Team Leadership",
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
        "An AI-driven phone system that turned a manual, rules-based call workflow into a self-service revenue channel. Handles thousands of calls a day with routing, self-service, and follow-up. Contributes an estimated 10% of company revenue.",
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
