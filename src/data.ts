export const ROLES = [
  'Software Developer',
  'Web & Mobile Engineer',
  'Full-Stack Developer',
  'Aspiring AI Systems Engineer',
]

export const COMMANDS = [
  'npm run dev',
  'git push origin main',
  'bun run migrate',
  'vercel --prod',
]

export type SkillGroup = {
  name: string
  tags: { label: string; highlight?: boolean }[]
}

export const SKILLS: SkillGroup[] = [
  {
    name: 'Languages',
    tags: [
      { label: 'TypeScript', highlight: true },
      { label: 'JavaScript', highlight: true },
      { label: 'Python' },
      { label: 'SQL' },
      { label: 'HTML/CSS' },
    ],
  },
  {
    name: 'Frontend',
    tags: [
      { label: 'React', highlight: true },
      { label: 'React Native', highlight: true },
      { label: 'Expo', highlight: true },
      { label: 'Angular' },
      { label: 'Next.js' },
      { label: 'TanStack Start/Query' },
      { label: 'Tailwind' },
      { label: 'shadcn/ui' },
    ],
  },
  {
    name: 'Backend',
    tags: [
      { label: 'Node.js', highlight: true },
      { label: 'Elysia/Bun', highlight: true },
      { label: 'Express' },
      { label: 'REST APIs' },
      { label: 'WebSockets' },
    ],
  },
  {
    name: 'Database',
    tags: [
      { label: 'PostgreSQL', highlight: true },
      { label: 'Supabase', highlight: true },
      { label: 'MongoDB' },
      { label: 'Drizzle ORM' },
      { label: 'Firebase/Firestore' },
    ],
  },
  {
    name: 'DevOps / Cloud',
    tags: [
      { label: 'Railway' },
      { label: 'Vercel' },
      { label: 'GitHub Actions' },
    ],
  },
  {
    name: 'Tools',
    tags: [
      { label: 'Git' },
      { label: 'Figma' },
      { label: 'Postman/HTTPie' },
      { label: 'VS Code / Zed' },
      { label: 'OpenCode' },
    ],
  },
]

export type Project = {
  type: string
  title: string
  desc: string
  year: string
  status?: string
  featured?: boolean
  stack: string[]
}

export const PROJECTS: Project[] = [
  {
    type: 'Web app',
    title: 'DistressNow Web Application',
    desc: 'Dynamic category schema and service-provider feature page that searches and finds service providers using the Google Maps API.',
    year: '2026',
    featured: true,
    stack: ['Next.js', 'Node.js', 'Firebase/Firestore', 'Google Maps API'],
  },
  {
    type: 'Full-stack web',
    title: 'Atokolo Empowerment Foundation',
    desc: 'Full website built collaboratively for the foundation, with backend and storage handling realtime uploads and feedback.',
    year: '2026',
    featured: true,
    stack: ['React', 'Node.js', 'Supabase/PostgreSQL'],
  },
  {
    type: 'Platform',
    title: 'BINNAF-OSH Website & Course Platform',
    desc: 'Full-stack website and course assessment platform with real-time feedback, deployed with zero-downtime rolling updates.',
    year: '2025 · inactive',
    stack: ['Next.js', 'Node.js', 'Supabase', 'TypeScript'],
  },
]

export type Experience = {
  period: string
  role: string
  company: string
  bullets: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    period: 'Feb 2026 –\nPresent',
    role: 'Web/Mobile Developer',
    company: 'DistressNow International Ltd. · Hybrid',
    bullets: [
      'Implementing features on the core mobile app and B2B services for the business marketplace',
      'Collaborating with designers in Figma to ship pixel-perfect, responsive UIs across breakpoints',
      'Providing ongoing maintenance, performance optimisation, and feature expansion',
    ],
  },
  {
    period: '2026 –\nPresent',
    role: 'Co-Founder (CTO) / Software Developer/ Instructor',
    company: 'NexaHub Technologies Ltd. · Hybrid',
    bullets: [
      'Co-founded NexaHub Technologies as the Chief Technical Officer',
      'Design, develop, document and oversee all web, mobile and applications projects within the organization', 'Coordinates and teaches development courses with web technologies',
      'Provided ongoing maintenance, performance optimisation, and feature expansion',
    ],
  },
  {
    period: 'May 2024 –\nMar 2025',
    role: 'Full-Stack Developer / Instructor',
    company: 'MetaForce Technologies · FCT-Abuja (Contract)',
    bullets: [
      'Delivered in-house and field-based instruction, fostering a high-quality learning environment',
      'Developed and maintained full-stack applications, with major expertise in frontend technologies',
      'Built and delivered full-stack curriculum covering React, Node.js, and the MERN stack for 30+ students',
    ],
  },
  {
    period: '2023 –\n2025',
    role: 'Web Developer / Instructor',
    company: 'Gateway Technologies and Digital Enterprise · Remote/Onsite (Contract)',
    bullets: [
      'Delivered 2 client projects — e-commerce storefronts, business websites, internal dashboards',
      'Set up CI/CD pipelines with GitHub Actions, cutting deployment time from hours to minutes',
      'Implemented pixel-perfect, responsive UIs from Figma designs across breakpoints',
    ],
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
}

export const EDUCATION = {
  degree: 'B.Sc. Economics',
  school: 'University of Nigeria, Nsukka',
  year: '2018 – 2022',
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'Diploma in Computer Engineering', issuer: 'Gateway Tech', year: '2017' },
  { name: 'Computer Hardware Basics', issuer: 'Cisco', year: '2023' },
  { name: 'Python Essentials', issuer: 'Cisco', year: '2023' },
  { name: 'JavaScript Essentials', issuer: 'Cisco', year: '2023' },
]

export const CONTACT_LINKS = [
  { type: 'email', href: 'mailto:ndukamich@gmail.com', label: 'ndukamich@gmail.com', live: true },
  { type: 'github', href: 'https://github.com/mich-nduka', label: 'github.com/mich-nduka' },
  { type: 'linkedin', href: 'https://linkedin.com/in/ikenna-onuoha', label: 'linkedin.com/in/ikenna-onuoha' },
  { type: 'phone', href: 'tel:+2348109352396', label: '+234 810 935 2396' },
]
