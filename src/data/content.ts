export const content = {
  name: 'Shruti Kumari',
  initial: 'S',
  wordmark: 'Shruti Kumari',
  roleEyebrow: 'SOFTWARE DEVELOPER · FRONTEND · DSA',
  availability: 'Open to Software Development Internships',
  headline: {
    text: 'Building *thoughtful* software, one project at a time.',
    italicWord: 'thoughtful',
  },
  subtitle:
    'Computer Science undergraduate who loves clean UI, solid fundamentals, and turning ideas into working products. Currently exploring full-stack development with Node.js, Express and PostgreSQL.',
  about: {
    bio: "I'm a B.Tech Computer Science student at Chandigarh Group of Colleges (expected June 2028, CGPA 8.6/10) with a strong foundation in C/C++, Data Structures and Algorithms, OOP and DBMS. I enjoy designing interfaces people actually like using, and I helped build the frontend of a Smart India Hackathon 2026 project that made it to the final-round shortlist. Outside code, I lead tech events and love bringing people together to build things.",
    highlights: ['thoughtful', 'interfaces', 'final-round', 'together'],
    stats: [
      { label: 'CGPA', value: 8.6, suffix: '/10', decimals: 1 },
      { label: 'Hackathon participants organized', value: 300, suffix: '+', decimals: 0 },
      { label: 'SIH 2026', value: 0, decimals: 0, suffix: 'Final-round shortlist', isText: true },
      { label: 'ICCMST 2025', value: 0, decimals: 0, suffix: '2nd place', isText: true },
    ],
  },
  skills: [
    {
      group: 'Programming',
      items: ['C/C++', 'JavaScript'],
    },
    {
      group: 'Web',
      items: ['HTML', 'CSS'],
    },
    {
      group: 'Currently Learning',
      items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
      isLearning: true,
    },
    {
      group: 'Core CS',
      items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'],
    },
    {
      group: 'AI / LLM',
      items: ['Prompt Engineering', 'LLM APIs', 'Tool Calling'],
    },
    {
      group: 'Tools',
      items: ['Git', 'GitHub'],
    },
  ],
  marqueeTech: [
    'C++', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL',
    'REST APIs', 'Git', 'GitHub', 'DSA', 'OOP', 'DBMS',
  ],
  projects: [
    {
      title: 'Crypto Tracer',
      subtitle: 'Smart India Hackathon 2026 — Team Project',
      description:
        'A web-based tool that helps investigators trace stolen cryptocurrency, built for a Ministry of Home Affairs (I4C) problem statement. I designed and built the case dashboard, transaction flow graph and report views so investigators can follow the money trail in one place.',
      highlights:
        'Cleared all college-level rounds; shortlisted for the final round; built with Git/GitHub in a team.',
      role: 'Frontend and UI design',
      tags: ['SIH 2026', 'Frontend', 'UI Design', 'Team Project'],
      badge: 'SIH 2026',
      github: '[PLACEHOLDER_URL]',
      live: null,
      gradient: 'from-accent-tint via-accent-soft/30 to-accent/20',
    },
    {
      title: 'Klip',
      subtitle: 'URL Shortener · Node.js, Express, PostgreSQL',
      description:
        'A full-stack app that turns long URLs into short links and redirects visitors to the original. REST APIs and a PostgreSQL schema store original URLs, short codes, creation timestamps and click counts.',
      highlights: null,
      role: null,
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
      badge: null,
      isInProgress: false,
      github: 'https://github.com/shru06-pro/klip',
      live: 'https://klip-shorty.vercel.app/',
      gradient: 'from-blue-100 via-accent-tint to-accent-soft/20',
    },
    {
      title: 'Personal Portfolio Website',
      subtitle: 'HTML5, CSS3',
      description:
        'A responsive portfolio with semantic HTML5, Flexbox layout, custom themes, hover effects and a contact section. This new version is a redesign.',
      highlights: null,
      role: null,
      tags: ['HTML5', 'CSS3', 'Responsive', 'Flexbox'],
      badge: null,
      github: '[PLACEHOLDER_URL]',
      live: '[PLACEHOLDER_URL]',
      gradient: 'from-amber-100 via-accent-tint to-rose-100',
    },
  ],
  timeline: [
    {
      year: '2026',
      title: 'Smart India Hackathon — Team Member',
      org: 'Crypto Tracer',
      description: 'Cleared all college-level rounds; shortlisted for the final round.',
    },
    {
      year: '2025',
      title: 'College Annual Fest — Technical Events Head',
      org: 'Tech Hackathon',
      description: 'Led the technical events team and organized a tech hackathon with 300+ participants.',
    },
    {
      year: '2025',
      title: 'Smart India Hackathon — Hackathon Coordinator',
      org: 'SIH Coordination',
      description: 'Coordinated 15 participating teams alongside a co-coordinator.',
    },
    {
      year: '2025',
      title: 'ICCMST 2025 — 2nd Position',
      org: 'International Conference on Computational Methods in Science & Technology',
      description: 'Won 2nd position with a team project on an IoT-based smart city.',
    },
  ],
  education: [
    {
      school: 'Chandigarh Group of Colleges, Landran, Mohali',
      degree: 'B.Tech Computer Science Engineering',
      detail: 'CGPA 8.6/10 · Expected June 2028',
    },
    {
      school: 'Pragya Bharti Public School, Gaya, Bihar',
      degree: 'Class XII (2024) — 73.8% · Class X (2022) — 93.2%',
      detail: 'Senior Secondary Education',
    },
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Operating Systems',
    'DBMS',
    'Computer Networks',
    'Software Engineering',
  ],
  certifications: ['AWS Generative AI', 'AWS Cloud Computing', 'Infosys Blockchain'],
  contact: {
    headline: "Let's build something *lovely*.",
    italicWord: 'lovely',
    email: 'shrukri345@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shru06/',
    github: 'https://github.com/shru06-pro/',
    resume: '/resume.pdf',
  },
  navLinks: [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type Content = typeof content;
