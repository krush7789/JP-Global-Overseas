/**
 * Static content, transcribed verbatim from
 * JM_Global_Overseas_Simple_Modern_Website_Blueprint.docx (the source of truth).
 * Section refs (S4.04 etc.) point at the blueprint. Empty arrays / strings mean
 * "not supplied yet" — the UI must not render that section/CTA (S4.11, S4.14, S10, S15).
 */

export const BRAND = "JM GLOBAL OVERSEAS";

/** S13 header. */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Study Abroad", href: "/study-abroad/" },
  { label: "Overseas Careers", href: "/overseas-careers/" },
  { label: "Visa & Documentation", href: "/visa-documentation/" },
  { label: "Training", href: "/training/" },
  { label: "Destinations", href: "/destinations/" },
  { label: "Contact Us", href: "/contact/" },
] as const;

export const HEADER_CTA = { label: "Book Consultation", href: "/contact/" } as const;

/** S13 footer. */
export const FOOTER = [
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/destinations/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Refund/Cancellation Policy", href: "/refund-cancellation-policy/" },
] as const;

/** S3 / S19. */
export const HERO = {
  headline: "YOUR JOURNEY TO A GLOBAL FUTURE STARTS HERE.",
  copy: "Explore international education, career and overseas opportunities across Russia, Europe and the Middle East with JM GLOBAL OVERSEAS.",
  primaryCta: { label: "Book a Consultation", href: "/contact/" },
  secondaryCta: { label: "Explore Destinations", href: "/destinations/" },
} as const;

/** S4.03 */
export const INTRO =
  "Your trusted partner for exploring international education, overseas employment, visa documentation assistance, training and related international services.";

/** S4.04 — six service cards. */
export const SERVICES = [
  { id: "education", title: "Overseas Education", text: "Guidance for students exploring international study opportunities.", href: "/study-abroad/" },
  { id: "visa", title: "Visa & Documentation", text: "Assistance with documentation and application preparation.", href: "/visa-documentation/" },
  { id: "employment", title: "Overseas Employment", text: "Assistance with international employment and recruitment opportunities.", href: "/overseas-careers/" },
  { id: "manpower", title: "Manpower Placement", text: "Recruitment and manpower placement assistance for international opportunities.", href: "/overseas-careers/" },
  { id: "training", title: "Training & Skill Development", text: "International training and career-oriented skill development.", href: "/training/" },
  { id: "support", title: "Student & Travel Support", text: "Student guidance and related travel/pre-departure assistance.", href: "/study-abroad/" },
] as const;

/** S4.05 / S4.10 — the three regions. */
export const REGIONS = [
  { id: "russia", name: "Russia", text: "Explore education and international opportunities in Russia.", href: "/destinations/russia/" },
  { id: "europe", name: "Europe", text: "Explore opportunities across European destinations.", href: "/destinations/europe/" },
  { id: "middle-east", name: "Middle East", text: "Explore education, employment and international opportunities across the Middle East.", href: "/destinations/middle-east/" },
] as const;

/** S5 — service mix per region (Middle East differs). */
export const REGION_SERVICES: Record<string, readonly string[]> = {
  russia: ["Study Abroad", "Career/Employment Opportunities", "Visa & Documentation Assistance", "Student Support", "Travel/Pre-Departure Guidance"],
  europe: ["Study Abroad", "Career/Employment Opportunities", "Visa & Documentation Assistance", "Student Support", "Travel/Pre-Departure Guidance"],
  "middle-east": ["Study Abroad", "Overseas Employment", "Recruitment/Manpower Placement", "Visa & Documentation Assistance", "Training/Skill Development"],
};

/** S6 destination page template (headline pattern + block names). */
export const REGION_TEMPLATE = {
  heroPrefix: "Explore Opportunities in",
  blocks: [
    "Short introduction", "Study opportunities", "Career/employment opportunities",
    "Visa & documentation assistance", "Who can apply / general profile guidance",
    "JM Global process", "Frequently asked questions", "Consultation CTA", "Contact CTA",
  ],
} as const;

/** S4.06 */
export const WHY_US = [
  "Destination-focused guidance",
  "Personalised consultation",
  "End-to-end application guidance",
  "Education and career pathways",
  "Dedicated applicant support",
] as const;

/** S4.07 / S4.08 homepage teasers. */
export const TEASERS = {
  study: {
    title: "STUDY ABROAD. THINK GLOBAL.",
    text: "Find the right international education opportunity based on your academic profile, preferred destination, field and goals.",
    cta: { label: "Find Your Study Destination", href: "/study-abroad/" },
  },
  careers: {
    title: "TAKE YOUR CAREER GLOBAL.",
    text: "Explore international employment and recruitment opportunities across selected destinations in Russia, Europe and the Middle East.",
    cta: { label: "Enquire About Overseas Careers", href: "/overseas-careers/" },
  },
} as const;

/** S4.09 — four steps. */
export const STEPS = [
  "Consultation",
  "Profile & Opportunity Discussion",
  "Application/Documentation Guidance",
  "Next Steps & Pre-Departure Support",
] as const;

/** S4.11 — genuine testimonials only. EMPTY until the client supplies real, permitted ones. */
export const TESTIMONIALS_HEADING = "Real journeys. Real experiences. Real people.";
export const TESTIMONIALS: readonly { name: string; destination: string; service: string; quote: string }[] = [];

/**
 * S4.12 — the blueprint gives example questions only, no answers.
 * Answers below are composed strictly from statements elsewhere in the blueprint
 * and MUST be approved by the client (needsClientApproval).
 */
export const FAQS = [
  { q: "What destinations do you cover?", a: "Russia, Europe and the Middle East.", needsClientApproval: true },
  { q: "What education services do you provide?", a: "Destination selection, course/program guidance, university/institution guidance where applicable, application guidance, documentation assistance, visa documentation assistance and pre-departure support.", needsClientApproval: true },
  { q: "Do you assist with overseas employment?", a: "Yes. JM GLOBAL OVERSEAS provides overseas employment/recruitment and manpower placement assistance.", needsClientApproval: true },
  { q: "How do I book a consultation?", a: "Use the Book a Consultation button or send an enquiry from the Contact page.", needsClientApproval: true },
] as const;

/** S4.13 */
export const FINAL_CTA = {
  headline: "READY TO EXPLORE YOUR GLOBAL OPPORTUNITY?",
  text: "Speak with JM GLOBAL OVERSEAS and take the next step.",
  cta: { label: "Book a Consultation", href: "/contact/" },
} as const;

/** S4.14 — address only; everything else stays empty until the client confirms it. */
export const CONTACT: { address: string; phone: string; email: string; whatsapp: string; origin: { lat: number; lon: number } } = {
  address: "Shop No. 110, 1st Floor, Maruti Vatika, Jageetpur Road, Kankhal, Haridwar, Uttarakhand – 249408",
  phone: "+91 8679803995",
  email: "jmglobaloverseas@gmail.com",
  // Not confirmed as a WhatsApp number — leave empty until the client says so.
  whatsapp: "",
  /** Office origin for the 3D routes (Kankhal, Haridwar) — geography, not a claim. */
  origin: { lat: 29.9457, lon: 78.1642 },
};

/** S7 */
export const STUDY_PAGE = {
  headline: "STUDY ABROAD. THINK GLOBAL.",
  copy: "Explore international education opportunities across Russia, Europe and the Middle East with structured guidance from profile evaluation through application and pre-departure support.",
  topics: ["Destination selection", "Course/program guidance", "University/institution guidance where applicable", "Application guidance", "Documentation assistance", "Visa documentation assistance", "Pre-departure support"],
  cta: { label: "Find Your Study Destination", href: "/contact/" },
} as const;

/** S8 */
export const CAREERS_PAGE = {
  headline: "TAKE YOUR CAREER GLOBAL.",
  copy: "Explore overseas employment and recruitment opportunities across selected destinations, supported by professional guidance through the recruitment and documentation process.",
  topics: ["International employment opportunities", "Recruitment assistance", "Manpower placement", "Profile guidance", "Documentation coordination", "Interview/preparation support where offered", "Pre-departure guidance"],
  cta: { label: "Enquire About Overseas Careers", href: "/contact/" },
} as const;

/** S9 */
export const VISA_PAGE = {
  headline: "DOCUMENTATION SUPPORT FOR YOUR INTERNATIONAL JOURNEY.",
  intro: "Structured assistance with documentation and application preparation related to the services offered by JM GLOBAL OVERSEAS.",
  topics: ["Document guidance", "Application preparation assistance", "Process guidance", "Destination-specific information where verified", "Applicant support"],
  /** Mandatory wording (S9). */
  disclaimer: "Final visa and immigration decisions are made by the relevant government authority.",
} as const;

/** S10 — show only currently offered programmes. EMPTY until supplied. */
export const TRAINING_PAGE = {
  headline: "BUILD SKILLS. OPEN GLOBAL OPPORTUNITIES.",
  fields: ["Program name", "Duration", "Mode", "Who it is for", "Key outcomes", "Registration/enquiry CTA"],
} as const;
export const TRAINING_PROGRAMS: readonly { name: string; duration: string; mode: string; audience: string; outcomes: string }[] = [];

/** S11 */
export const ABOUT_PAGE = {
  headline: "CONNECTING PEOPLE WITH GLOBAL OPPORTUNITIES.",
  copy: "JM GLOBAL OVERSEAS provides overseas education consultancy, visa and immigration documentation assistance, overseas employment/recruitment and manpower placement assistance, international training and skill development, student support and allied international services.",
  focusTitle: "Our Focus",
  focus: ["Russia", "Europe", "Middle East"],
  approachTitle: "Our Approach",
  approach: ["Understand", "Guide", "Prepare", "Support"],
} as const;

/** S12 — enquiry fields (used to build a prefilled message; nothing is submitted anywhere). */
export const ENQUIRY = {
  interestedIn: ["Study Abroad", "Overseas Job", "Visa & Documentation", "Training", "Other"],
  regions: ["Russia", "Europe", "Middle East"],
  cta: "Submit Enquiry",
} as const;

/** S16 legal routes — titles only; bodies come from the client (empty = title only). */
export const LEGAL: readonly { slug: string; title: string; body: string }[] = [
  { slug: "privacy-policy", title: "Privacy Policy", body: "" },
  { slug: "terms", title: "Terms & Conditions", body: "" },
  { slug: "disclaimer", title: "Disclaimer", body: "" },
  { slug: "refund-cancellation-policy", title: "Refund/Cancellation Policy", body: "" },
];

/** S16 sitemap routes. */
export const ROUTES = [
  "/", "/about/", "/study-abroad/", "/overseas-careers/", "/visa-documentation/", "/training/",
  "/destinations/", "/destinations/russia/", "/destinations/europe/", "/destinations/middle-east/",
  "/success-stories/", "/faqs/", "/contact/",
  "/privacy-policy/", "/terms/", "/disclaimer/", "/refund-cancellation-policy/",
] as const;
