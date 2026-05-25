export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: ExperienceBullet[];
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

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  metrics: Metric[];
  experience: Experience[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  education: EducationEntry[];
  projects: Project[];
}

export const resumeData: ResumeData = {
  contact: {
    name: "John Trotta",
    title: "VP of Technology | Infrastructure and Security Leadership",
    location: "NY / NJ",
    phone: "917-355-3252",
    email: "johntrottadev@gmail.com",
    linkedin: "linkedin.com/in/johntrotta1",
    linkedinUrl: "https://linkedin.com/in/johntrotta1",
    github: "github.com/johntrottadev",
    githubUrl: "https://github.com/johntrottadev",
  },

  summary:
    "Technology executive with 17 years of experience, including 8+ years owning enterprise security, compliance, and infrastructure in regulated financial services. Proven leader of SOC 2, HIPAA, and PCI programs, delivering 99.99% uptime, zero major security incidents, and 10+ successful audits while scaling systems, reducing costs, and enabling revenue growth. Operates as architect, hands-on reviewer, and final escalation authority.",

  metrics: [
    { value: "99.99%", label: "Uptime" },
    { value: "0", label: "Security Incidents" },
    { value: "10+", label: "Clean Audits" },
    { value: "30%", label: "Cost Reduction" },
  ],

  experience: [
    {
      role: "Chief Technology Officer",
      company: "RTR Financial Services, Inc.",
      period: "August 2019 – Present",
      location: "Staten Island, NY",
      description:
        "Executive owner of technology, security, and compliance for a 300-employee, $40M+ revenue organization supporting 1,000+ users/endpoints/servers in a 50/50 hybrid on-prem/cloud environment with a $1–3M annual budget.",
      bullets: [
        {
          text: "Program owner for SOC 2, HIPAA, and PCI, with executive accountability for audit outcomes, risk acceptance, and continuous improvement",
        },
        {
          text: "Led 10+ audits end-to-end with zero material findings; conducted quarterly vulnerability scans and pen tests with full remediation",
        },
        {
          text: "Maintained 99.99% uptime (up from ~95% pre-tenure); led quarterly DR/BC testing with 15-min RPO / 12-hr RTO",
        },
        {
          text: "Built a defense-in-depth security program (IAM, SIEM, EDR, DLP, MFA, NGFW, PKI, 24×7 SOC); zero major incidents over 7 years",
        },
        {
          text: "Scaled infrastructure and controls from 75 to 300 employees; led large-scale P2V, data center, cloud, OS, and app migrations",
        },
        {
          text: "Reduced technology spend by ~30% through architecture rationalization and vendor consolidation",
        },
        {
          text: "Directly supported $10M+ in enterprise and regulated-client revenue by owning technical RFPs, security questionnaires, and contract security terms",
        },
        {
          text: "Perform 10–20 vendor risk assessments annually; act as primary technical liaison for clients, auditors, and regulators",
        },
        {
          text: "Delivered 80–100 hours/month in operational savings via automation (PowerShell, Python)",
        },
        {
          text: "Designed CI/CD, IaC, and Kubernetes (k3s) environments; hands-on expertise in AI systems, agentic workflows, and autonomous pipelines (early production)",
        },
      ],
    },
    {
      role: "IT Manager",
      company: "RTR Financial Services, Inc.",
      period: "February 2017 – August 2019",
      location: "Staten Island, NY",
      description: "",
      bullets: [
        {
          text: "Owned availability, security, patching, and compliance across all systems and networks",
        },
        {
          text: "Designed and deployed enterprise domains, networks, servers, and security architecture",
        },
        {
          text: "Automated IT operations with PowerShell/Python; led ransomware recovery during WannaCry",
        },
      ],
    },
    {
      role: "Systems Engineer",
      company: "Online Computers",
      period: "June 2016 – February 2017",
      location: "Whippany, NJ",
      description: "",
      bullets: [],
    },
    {
      role: "Support Technician",
      company: "RTR Financial Services, Inc.",
      period: "January 2012 – June 2016",
      location: "Staten Island, NY",
      description: "",
      bullets: [],
    },
    {
      role: "Business Analyst",
      company: "RTR Financial Services, Inc.",
      period: "August 2008 – January 2012",
      location: "Staten Island, NY",
      description: "",
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
        "Technology Budget Management ($1-3M)",
        "Vendor Consolidation",
        "Architecture Rationalization",
        "Technical RFPs",
        "Client/Auditor Relations",
        "Team Scaling (75→300)",
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
      name: "PAI (Personal AI Infrastructure)",
      description:
        "Open-source AI scaffolding framework for building dependable AI assistance.",
      technologies: "TypeScript, Claude API, Custom Algorithms",
    },
    {
      name: "Homelab",
      description:
        "Production-grade Kubernetes (k3s) cluster running monitoring, automation, and AI workloads on bare metal.",
      technologies: "Kubernetes, k3s, Bare Metal, Monitoring",
    },
  ],
};
