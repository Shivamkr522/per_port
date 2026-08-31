export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  approach: string;
  technologies: string[];
  outcome: string;
  image: string;
  github: string;
  live: string;
  caseStudy: string;
}

export const projects: Project[] = [
  {
    id: 'kers-bicycle',
    title: 'KERS in a Bicycle Using a Flywheel',
    description:
      'A mechanical Kinetic Energy Recovery System (KERS) for a bicycle that captures braking energy in a flywheel and releases it back to the drivetrain to assist acceleration.',
    problem:
      'Conventional bicycles lose kinetic energy as heat during braking and deceleration, requiring extra rider effort to regain speed in stop-and-go conditions.',
    role: 'Design & Development (College Project)',
    approach:
      'Engineered a flywheel-based energy storage mechanism to capture kinetic energy during braking and store it as rotational energy, then implemented an energy-release system to transfer that stored energy back to the drivetrain to assist acceleration.',
    technologies: ['Flywheel Energy Storage', 'Rotational Dynamics', 'Mechanical Transmission'],
    outcome:
      'Improved overall bicycle efficiency by reducing energy loss during braking through mechanical energy recovery, while applying energy conservation and rotational dynamics principles in a hands-on prototype.',
    image: '',
    github: '',
    live: '',
    caseStudy: '',
  },
  {
    id: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website built to showcase professional experience, skills, and projects, developed using AI-assisted development tools and technical mentorship.',
    problem:
      'Needed a professional, up-to-date online presence to showcase experience, skills, and projects to recruiters and collaborators without a prior web development background.',
    role: 'Design & Development',
    approach:
      'Leveraged AI-assisted development tools for rapid development, troubleshooting, and foundational web development including responsive design, while applying modern AI-assisted development workflows under technical mentorship.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'AI-Assisted Development'],
    outcome:
      'Delivered a live, responsive portfolio site while demonstrating adaptability and cross-functional learning beyond a traditional sales skill set.',
    image: '',
    github: '',
    live: '',
    caseStudy: '',
  },
];
