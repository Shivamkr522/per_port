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
    description: '[ADD PROJECT DESCRIPTION]',
    problem: '[ADD PROBLEM STATEMENT]',
    role: '[ADD MY ROLE]',
    approach: '[ADD APPROACH]',
    technologies: [],
    outcome: '[ADD RESULTS / LEARNINGS]',
    image: '',
    github: '',
    live: '',
    caseStudy: '',
  },
];
