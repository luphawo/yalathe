import {
  Wind,
  Recycle,
  FileSearch,
  ShieldCheck,
  Database,
  Droplets,
  Users,
  CloudSun,
  Smartphone,
  GraduationCap,
  Map,
  Handshake,
  Lightbulb,
  Scale,
  Zap,
} from "lucide-react";

export type Service = {
  id: number;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: typeof Wind;
};

export type TeamMember = {
  id: number;
  name: string;
  initials: string;
  role: string;
  education: string;
  institution: string;
  year: number;
  experience: string;
  yearsExp: number;
};

export type Value = {
  id: number;
  title: string;
  description: string;
};

export type Goal = {
  id: number;
  number: string;
  text: string;
};

export type Pillar = {
  id: number;
  icon: typeof Wind;
  title: string;
  subtitle: string;
  description: string;
};

export type Stat = {
  id: number;
  value: number;
  suffix: string;
  label: string;
};

export type QualityElement = {
  id: number;
  number: string;
  title: string;
  description: string;
};

export type PhilosophyCard = {
  id: number;
  icon: typeof Wind;
  title: string;
  description: string;
};

// ── Services ──────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Air Quality Consulting & Engineering",
    description:
      "Comprehensive air quality management, monitoring, and engineering solutions for industrial and municipal clients.",
    bullets: [
      "Ambient air quality monitoring & modelling",
      "Dust fallout & nuisance dust assessments",
      "Stack emission testing & compliance reporting",
      "Air quality impact assessments for EIA",
      "Air quality management plans",
      "Atmospheric dispersion modelling",
    ],
    icon: Wind,
  },
  {
    id: 2,
    number: "02",
    title: "Remediation, Restoration & Redevelopment",
    description:
      "Site investigation, contamination assessment, and tailored remediation strategies for sustainable land use.",
    bullets: [
      "Preliminary & detailed site investigations",
      "Soil and groundwater contamination assessment",
      "Remediation action plans (RAP)",
      "In-situ and ex-situ remediation technologies",
      "Ecological restoration and habitat rehabilitation",
      "Post-remediation monitoring & verification",
    ],
    icon: Recycle,
  },
  {
    id: 3,
    number: "03",
    title: "Environmental Impact Assessment & Permitting",
    description:
      "End-to-end EIA services ensuring regulatory compliance and sustainable project authorisation.",
    bullets: [
      "Basic assessments & full EIA processes",
      "Environmental management programmes (EMPr)",
      "Scoping & specialist study coordination",
      "Stakeholder engagement & public participation",
      "Environmental authorisation appeals",
      "Compliance monitoring & audit reports",
    ],
    icon: FileSearch,
  },
  {
    id: 4,
    number: "04",
    title: "Environment, Health & Safety Management",
    description:
      "Integrated EHS systems to protect workers, communities, and ecosystems while meeting legislative obligations.",
    bullets: [
      "OHSAS 18001 / ISO 45001 implementation",
      "EHS risk assessments & legal registers",
      "Incident investigation & root-cause analysis",
      "EHS audits, inspections & training",
      "Emergency preparedness & response planning",
      "ISO 14001 environmental management systems",
    ],
    icon: ShieldCheck,
  },
  {
    id: 5,
    number: "05",
    title: "Management Information Systems",
    description:
      "Data-driven environmental intelligence platforms that enable real-time decision-making and reporting.",
    bullets: [
      "Environmental data management systems",
      "Compliance tracking dashboards",
      "Custom reporting & visualisation tools",
      "Integration with SCADA & IoT sensors",
      "Cloud-based environmental MIS solutions",
      "Regulatory submission portals",
    ],
    icon: Database,
  },
  {
    id: 6,
    number: "06",
    title: "Water, Waste & Natural Resources Management",
    description:
      "Sustainable management of water resources, waste streams, and biodiversity assets.",
    bullets: [
      "Water use licence applications (WULA)",
      "Hydrology & hydrogeological investigations",
      "Integrated waste management plans",
      "Waste minimisation & recycling strategies",
      "Biodiversity assessments & management plans",
      "Wetland delineation & impact assessment",
    ],
    icon: Droplets,
  },
  {
    id: 7,
    number: "07",
    title: "Community & Social Innovation",
    description:
      "Facilitating meaningful stakeholder engagement and community-centred environmental governance.",
    bullets: [
      "Social impact assessments (SIA)",
      "Community liaison & grievance management",
      "Livelihoods restoration programmes",
      "Environmental awareness campaigns",
      "CSI & corporate citizenship facilitation",
      "FPIC (Free, Prior and Informed Consent) processes",
    ],
    icon: Users,
  },
  {
    id: 8,
    number: "08",
    title: "Climate Adaptation & Sustainability",
    description:
      "Science-based climate risk assessment and sustainability strategy to future-proof organisations.",
    bullets: [
      "Carbon footprint & GHG inventories",
      "Climate risk & vulnerability assessments",
      "Net-zero strategy & decarbonisation roadmaps",
      "ESG reporting (GRI, CDP, TCFD frameworks)",
      "Climate adaptation planning",
      "Sustainability performance benchmarking",
    ],
    icon: CloudSun,
  },
  {
    id: 9,
    number: "09",
    title: "Digital E-Waste & Circular Economy",
    description:
      "Pioneering circular economy models and responsible e-waste management for a digital South Africa.",
    bullets: [
      "E-waste collection & recycling programmes",
      "Extended producer responsibility (EPR) compliance",
      "Circular economy strategy development",
      "Life-cycle assessment (LCA) studies",
      "Waste exchange & resource recovery platforms",
      "Digital asset refurbishment & reuse models",
    ],
    icon: Smartphone,
  },
  {
    id: 10,
    number: "10",
    title: "Training Management",
    description:
      "Accredited environmental and EHS training programmes that build skills and drive compliance culture.",
    bullets: [
      "Environmental awareness & induction training",
      "EHS legislative compliance training",
      "Waste management operator training",
      "Emergency response & spill containment drills",
      "GIS tools & remote sensing workshops",
      "Customised e-learning module development",
    ],
    icon: GraduationCap,
  },
  {
    id: 11,
    number: "11",
    title: "Geographic Information Systems (GIS) Services",
    description:
      "Spatial intelligence and mapping solutions that reveal environmental patterns and support decisions.",
    bullets: [
      "Spatial data capture, processing & analysis",
      "Environmental mapping & atlas production",
      "Remote sensing & satellite image analysis",
      "GIS-based environmental impact overlays",
      "Land-use change detection & monitoring",
      "Web-GIS portals for stakeholder access",
    ],
    icon: Map,
  },
];

// ── Team ──────────────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Mkhuseli Nxusani",
    initials: "MN",
    role: "Managing Director",
    education: "NDip Building Science",
    institution: "Wits Technikon",
    year: 1998,
    experience:
      "Extensive project management background across built environment and environmental sectors. Founded Yalathe Environmental in 2020 with a vision to deliver world-class environmental services from an African perspective.",
    yearsExp: 25,
  },
  {
    id: 2,
    name: "Thandolwethu Zungu",
    initials: "TZ",
    role: "Environmental Manager",
    education: "BSc Environmental Science",
    institution: "University of KwaZulu-Natal",
    year: 2013,
    experience:
      "EHS management experience at Eskom Rotek Industries. Specialises in environmental compliance monitoring, impact assessments, and stakeholder facilitation for large-scale infrastructure projects.",
    yearsExp: 10,
  },
  {
    id: 3,
    name: "Babalwa Nodliwa",
    initials: "BN",
    role: "Director",
    education: "Environmental Management",
    institution: "Eastern Cape",
    year: 2015,
    experience:
      "Drives strategic direction and business development for Yalathe Environmental. Brings expertise in community engagement, social impact assessment, and advancing the firm's women-led sustainability agenda.",
    yearsExp: 9,
  },
];

// ── Values ────────────────────────────────────────────────────────────────────

export const values: Value[] = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We operate with unwavering honesty, transparency, and ethical conduct in every engagement.",
  },
  {
    id: 2,
    title: "Sustainability",
    description:
      "Every decision we make is weighed against its long-term impact on ecosystems and communities.",
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We pursue the highest standards of technical quality and professional delivery.",
  },
  {
    id: 4,
    title: "Diversity",
    description:
      "Our strength lies in diverse perspectives — 100% Black-owned, 30% women-led, proudly South African.",
  },
  {
    id: 5,
    title: "Collaboration",
    description:
      "We build genuine partnerships with clients, regulators, communities, and the environment.",
  },
  {
    id: 6,
    title: "Impact",
    description:
      "We measure success not by contracts won, but by the positive change we create on the ground.",
  },
];

// ── Goals ─────────────────────────────────────────────────────────────────────

export const goals: Goal[] = [
  {
    id: 1,
    number: "01",
    text: "Establish Yalathe Environmental as a leading provider of specialised environmental services across South Africa and the broader African continent.",
  },
  {
    id: 2,
    number: "02",
    text: "Deliver technically rigorous, innovative solutions that meet and exceed client expectations in environmental consulting.",
  },
  {
    id: 3,
    number: "03",
    text: "Build lasting partnerships with government, industry, and communities to drive sustainable development outcomes.",
  },
  {
    id: 4,
    number: "04",
    text: "Empower previously disadvantaged communities through skills development, training, and inclusive employment practices.",
  },
  {
    id: 5,
    number: "05",
    text: "Integrate cutting-edge GIS, digital, and data analytics tools into every environmental management solution we deliver.",
  },
  {
    id: 6,
    number: "06",
    text: "Champion climate adaptation and circular economy principles that position South African businesses for a net-zero future.",
  },
  {
    id: 7,
    number: "07",
    text: "Maintain full regulatory compliance and contribute to the development of progressive environmental policy in South Africa.",
  },
  {
    id: 8,
    number: "08",
    text: "Grow a diverse, high-performing team that reflects the communities we serve and the future we want to build.",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { id: 1, value: 11, suffix: "+", label: "Service Areas" },
  { id: 2, value: 3, suffix: "", label: "Directors" },
  { id: 3, value: 2020, suffix: "", label: "Year Founded" },
  { id: 4, value: 100, suffix: "%", label: "Black-Owned" },
];

// ── Philosophy ────────────────────────────────────────────────────────────────

export const philosophy: PhilosophyCard[] = [
  {
    id: 1,
    icon: Handshake,
    title: "Partnerships",
    description:
      "We believe the most durable environmental solutions emerge from genuine, trust-based relationships between consultants, clients, regulators, and communities — not transactional engagements.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From GIS-powered spatial analysis to circular economy frameworks, we embed emerging technologies and progressive thinking into every project brief.",
  },
  {
    id: 3,
    icon: Scale,
    title: "Compliance",
    description:
      "Navigating South Africa's complex environmental legislative landscape is our expertise. We ensure every client meets NEMA, NEMAQA, NWA, and all applicable regulations — first time.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Resilience",
    description:
      "We design environmental strategies that withstand regulatory shifts, climate variability, and economic disruption — building adaptive capacity for the long term.",
  },
];

// ── Quality Policy ────────────────────────────────────────────────────────────

export const qualityPolicy: QualityElement[] = [
  {
    id: 1,
    number: "01",
    title: "Client Focus",
    description:
      "Understanding and exceeding client requirements at every stage of engagement.",
  },
  {
    id: 2,
    number: "02",
    title: "Technical Excellence",
    description:
      "Applying the highest standards of scientific rigour and engineering discipline.",
  },
  {
    id: 3,
    number: "03",
    title: "Continuous Improvement",
    description:
      "Systematically reviewing processes and outcomes to raise performance benchmarks.",
  },
  {
    id: 4,
    number: "04",
    title: "People Development",
    description:
      "Investing in the skills, wellbeing, and growth of every team member.",
  },
  {
    id: 5,
    number: "05",
    title: "Ethical Conduct",
    description:
      "Upholding integrity, transparency, and accountability in all professional activities.",
  },
];

// ── Value Propositions (3 pillars) ───────────────────────────────────────────

export const pillars = [
  {
    id: 1,
    icon: Wind,
    title: "Environmental Consulting",
    subtitle: "Science-led advisory",
    description:
      "Air quality, remediation, impact assessments, EHS management, and climate adaptation — delivered with technical precision and regulatory fluency.",
  },
  {
    id: 2,
    icon: Map,
    title: "GIS-Enabled Solutions",
    subtitle: "Spatial intelligence",
    description:
      "Spatial analysis, resource mapping, land-use change detection, and sustainability reporting powered by best-in-class geographic information systems.",
  },
  {
    id: 3,
    icon: Users,
    title: "Social Facilitation & Training",
    subtitle: "Community-centred impact",
    description:
      "Stakeholder engagement, public participation, community awareness campaigns, and accredited EHS training that build capacity and trust.",
  },
];
