export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'business-product',
    name: 'Business & Product',
    skills: ['Product Management', 'Marketing', 'Problem Solving', 'Presentation'],
  },
  {
    id: 'analytics-productivity',
    name: 'Analytics & Productivity',
    skills: ['Microsoft Excel', 'Microsoft PowerPoint', 'Power BI'],
  },
  {
    id: 'technology',
    name: 'Technology',
    skills: ['Java', 'AI Tools / Artificial Intelligence'],
  },
];
