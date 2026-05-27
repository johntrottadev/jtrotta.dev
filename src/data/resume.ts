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
    title: "VP of Technology | Infrastructure and Security Leadership",
    location: "NY / NJ",
    email: "johntrottadev@gmail.com",
    linkedin: "linkedin.com/in/johntrotta1",
    linkedinUrl: "https://linkedin.com/in/johntrotta1",
    github: "github.com/johntrottadev",
    githubUrl: "https://github.com/johntrottadev",
  },

  summary:
    "17 years in technology leadership, the last 8+ owning enterprise security, compliance, and infrastructure for a regulated financial services firm. I run SOC 2, HIPAA, and PCI programs end-to-end, keep systems at 99.99% uptime, and haven't had a major security incident in seven years. I still architect, review code, and build — I'm not the executive who stopped touching the work.",

  experience: [
    {
      role: "VP of Technology",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 – Present",
      location: "Staten Island, NY",
      description:
        "Executive owner of technology, security, and compliance for a mid-size financial services organization in a hybrid on-prem/cloud environment.",
      bullets: [
        "Program owner for SOC 2, HIPAA, and PCI, with executive accountability for audit outcomes, risk acceptance, and continuous improvement",
        "Led multiple audits end-to-end with zero material findings; conducted quarterly vulnerability scans and pen tests with full remediation",
        "Drove uptime from ~95% to 99.99%; led quarterly DR/BC testing with aggressive RPO/RTO targets",
        "Built a defense-in-depth security program (IAM, SIEM, EDR, DLP, MFA, NGFW, PKI, 24×7 SOC); zero major incidents over 7 years",
        "Scaled infrastructure and controls through significant organizational growth; led large-scale P2V, data center, cloud, OS, and app migrations",
        "Reduced technology spend substantially through architecture rationalization and vendor consolidation",
        "Directly supported enterprise and regulated-client revenue by owning technical RFPs, security questionnaires, and contract security terms",
        "Primary technical liaison for clients, auditors, and regulators; lead vendor risk assessments that directly informed contract and procurement decisions",
        "Automated manual operations with PowerShell and Python, eliminating recurring toil across infrastructure, security, and compliance workflows",
        "Building AI-driven operations tooling — agentic workflows that monitor, remediate, and report autonomously with human-in-the-loop approval",
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "February 2017 – August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        "Owned availability, security, patching, and compliance across all systems and networks",
        "Designed and deployed enterprise domains, networks, servers, and security architecture",
        "Automated IT operations with PowerShell/Python; led ransomware recovery during WannaCry",
      ],
    },
    {
      role: "Support Technician",
      company: "Online Computers",
      period: "June 2016 – February 2017",
      location: "Whippany, NJ",
      description:
        "MSP environment supporting multiple SMB clients across diverse technology stacks.",
      bullets: [],
    },
    {
      role: "Support Technician",
      company: "RTR Financial Services, Inc.",
      period: "January 2012 – June 2016",
      location: "Staten Island, NY",
      description:
        "Hands-on support across all systems and infrastructure, building the institutional knowledge that later informed the security and compliance programs I would own.",
      bullets: [],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 – January 2012",
      location: "Staten Island, NY",
      description:
        "First role at RTR — learned the business from the operations side before moving into technology.",
      bullets: [],
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
    { name: "PAI", category: "AI" },
    { name: "GSD", category: "AI" },
    { name: "Claude Code", category: "AI" },
    { name: "ElevenLabs", category: "AI" },
    { name: "LLM-Wiki", category: "AI" },
    { name: "ProxMox", category: "Infrastructure" },
    { name: "Kubernetes (k3s)", category: "Infrastructure" },
    { name: "Docker", category: "Infrastructure" },
    { name: "Flux CD", category: "Infrastructure" },
    { name: "Komodo", category: "Infrastructure" },
    { name: "Terraform", category: "Infrastructure" },
    { name: "Ansible", category: "Infrastructure" },
    { name: "Cloudflare", category: "Infrastructure" },
    { name: "Kube-Prometheus Stack", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
    { name: "Loki", category: "Monitoring" },
    { name: "Uptime Kuma", category: "Monitoring" },
    { name: "Netdata", category: "Monitoring" },
    { name: "Velero", category: "Operations" },
    { name: "Kyverno", category: "Operations" },
    { name: "Cert Manager", category: "Operations" },
    { name: "Kopia", category: "Operations" },
    { name: "Rclone", category: "Operations" },
    { name: "Pushover", category: "Operations" },
    { name: "Pi-hole", category: "Networking" },
    { name: "Netbird", category: "Networking" },
    { name: "Palo Alto", category: "Networking" },
    { name: "Cisco", category: "Networking" },
    { name: "Wazuh", category: "Security" },
    { name: "SOPS", category: "Security" },
    { name: "OpenVAS", category: "Security" },
    { name: "NetAlertX", category: "Security" },
    { name: "Maltrail", category: "Security" },
    { name: "iTerm2", category: "Dev Tools" },
    { name: "VS Code", category: "Dev Tools" },
    { name: "Raycast", category: "Dev Tools" },
    { name: "Oh My Zsh", category: "Dev Tools" },
    { name: "Git", category: "Dev Tools" },
    { name: "Cursor", category: "Dev Tools" },
    { name: "Vim", category: "Dev Tools" },
    { name: "tmux", category: "Dev Tools" },
  ],
};
