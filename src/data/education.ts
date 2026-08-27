export interface Education {
  id: string;
  degree: string;
  specialization: string;
  institution: string;
  status: string;
  startYear: string;
  endYear: string;
  details: string;
}

export const education: Education[] = [
  {
    id: 'mba',
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Marketing',
    institution: 'UPES',
    status: 'Currently Pursuing',
    startYear: '[ADD MBA START YEAR]',
    endYear: '[ADD EXPECTED GRADUATION YEAR]',
    details: '',
  },
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Mechanical Engineering',
    institution: 'G L Bajaj Institute of Technology and Management',
    status: 'Completed',
    startYear: '[ADD B.TECH START YEAR]',
    endYear: '[ADD GRADUATION YEAR]',
    details: '',
  },
];
