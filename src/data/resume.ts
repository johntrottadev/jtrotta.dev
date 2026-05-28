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
    "17 years building security and compliance programs from the ground up at a regulated financial services firm. I created SOC 2 Type II, PCI-DSS, and HIPAA programs from scratch, passed 10+ audits with zero material findings, and haven't had a major security incident in seven years. I sit close to ownership as a strategic advisor — and I still architect, review code, and build the platforms that run the business.",

  experience: [
    {
      role: "Chief Technology & Security Officer",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 – Present",
      location: "Staten Island, NY",
      description:
        "Executive owner of security, compliance, and technology for a mid-size financial services organization operating in a hybrid on-prem/cloud environment.",
      bullets: [
        "Built a defense-in-depth security program from the ground up — IAM, EDR, DLP, PKI, network security, and 24×7 SOC operations — and haven't had a major security incident in seven years",
        "Created SOC 2 Type II, PCI-DSS, and HIPAA programs from scratch — designed the control frameworks, authored the policy library, defined the audit scope, and earned first-time certifications",
        "Passed 10+ audits end-to-end with zero material findings; lead quarterly vulnerability assessments and pen tests with full remediation tracking",
        "Drove uptime from ~95% to 99.99%; lead quarterly DR/BC testing with aggressive RPO/RTO targets",
        "Designed an AI-powered compliance monitoring platform that replaced manual spot-checking with full-coverage legal disclosure verification and sentiment analysis — eliminated critical blind spots and saved manager hours weekly",
        "Strategic advisor to ownership on risk, organizational design, and operational efficiency — the kind of counsel that goes beyond technology",
        "Technical authority on RFPs, security questionnaires, and contract terms; present directly to prospective regulated clients and serve as primary liaison to legal, auditors, and regulators",
        "Reduced technology spend significantly through architecture rationalization and vendor consolidation while scaling infrastructure and controls through major organizational growth",
        "Build AI-driven operations tooling — agentic workflows that monitor, remediate, and report autonomously with human-in-the-loop approval",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "2016 – August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Led ransomware recovery during WannaCry with no DR plan, no golden images, and no documented procedures — coordinated an ad-hoc response across the team and outside vendors and restored full operations within 48 hours",
        "Used the incident as catalyst to stand up formal disaster recovery, business continuity, and security monitoring programs from scratch",
        "Owned availability, security, patching, and compliance across all enterprise systems and networks",
      ],
    },
    {
      role: "Infrastructure & Security Lead",
      company: "RTR Financial Services, Inc.",
      period: "2014 – 2016",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Designed and deployed enterprise domain architecture, network segmentation, server infrastructure, and the foundational security controls that everything else was later built on",
        "Established automation-first operational practices with PowerShell and Python",
      ],
    },
    {
      role: "Systems Administrator",
      company: "RTR Financial Services, Inc.",
      period: "2012 – 2014",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Assumed sole ownership of enterprise IT, inheriting a minimally managed network with no security controls and no documented policies",
      ],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 – 2012",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Analyzed business processes and operational workflows across revenue-generating departments — built the cross-functional context that later shaped how I approached technology and security",
      ],
    },
  ],

  skillCategories: [
    {
      name: "Security and Compliance",
      skills: [
        "SOC 2",
        "HIPAA",
        "PCI DSS",
        "Defense-in-Depth",
        "IAM",
        "SIEM",
        "EDR",
        "DLP",
        "MFA",
        "NGFW",
        "PKI",
        "Vulnerability Management",
        "Pen Testing",
        "Vendor Risk Assessment",
        "Security Questionnaires",
        "Incident Response",
      ],
    },
    {
      name: "Infrastructure and Cloud",
      skills: [
        "Hybrid Cloud (On-Prem/Cloud)",
        "Data Center Operations",
        "VMware vSphere",
        "Windows Server",
        "Active Directory",
        "DNS/DHCP",
        "Networking (Cisco)",
        "Disaster Recovery/Business Continuity",
        "P2V Migration",
      ],
    },
    {
      name: "Automation and Engineering",
      skills: [
        "PowerShell",
        "Python",
        "CI/CD",
        "Infrastructure as Code (IaC)",
        "Kubernetes (k3s)",
        "Docker",
        "AI Systems",
        "Agentic Workflows",
        "Autonomous Pipelines",
      ],
    },
    {
      name: "Leadership and Strategy",
      skills: [
        "Technology Budget Management",
        "Vendor Consolidation",
        "Architecture Rationalization",
        "Technical RFPs",
        "Client/Auditor Relations",
        "Team Scaling",
        "Executive Reporting",
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
        "AI-powered platform that replaces manual spot-checking with full-coverage legal disclosure verification and sentiment analysis on customer calls. Eliminates the blind spots that manual sampling leaves behind in regulated communication workflows.",
      technologies:
        "Python, Speech-to-Text, LLM APIs, Sentiment Analysis",
    },
    {
      name: "Homelab",
      description:
        "Production-grade Kubernetes (k3s) cluster on ProxMox, fully GitOps-managed with Flux. Runs 25+ services including monitoring, automation, media, document management, and AI workloads on bare metal.",
      technologies: "ProxMox, k3s, Flux, Kube-Prometheus, Velero, Loki",
    },
    {
      name: "OpsMan",
      description:
        "Semi-autonomous AI ops manager for the homelab. Watches the ProxMox + Kubernetes environment, runs approved Day-2 operations, journals everything, and pushes risky changes back for explicit approval.",
      technologies: "Python, ProxMox API, Kubernetes API, Pushover",
    },
  ],

  stack: [
    { name: "QRadar", category: "Security" },
    { name: "SentinelOne", category: "Security" },
    { name: "ThreatLocker", category: "Security" },
    { name: "KnowBe4", category: "Security" },
    { name: "Wazuh", category: "Security" },
    { name: "OpenVAS", category: "Security" },
    { name: "SharePoint", category: "Security" },
    { name: "Palo Alto", category: "Networking" },
    { name: "Cisco", category: "Networking" },
    { name: "Kubernetes (k3s)", category: "Infrastructure" },
    { name: "Docker", category: "Infrastructure" },
    { name: "Terraform", category: "Infrastructure" },
    { name: "Ansible", category: "Infrastructure" },
    { name: "Kube-Prometheus Stack", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
    { name: "Claude Code", category: "AI" },
  ],
};
