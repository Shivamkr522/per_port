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
    institution: 'UPES, Dehradun',
    status: 'Currently Pursuing',
    startYear: '2026',
    endYear: '2028',
    details: '',
  },
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Mechanical Engineering',
    institution: 'G L Bajaj Institute of Technology and Management, Greater Noida',
    status: 'Completed',
    startYear: '2017',
    endYear: '2021',
    details: '71.8%',
  },
];
