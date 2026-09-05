export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'business-product',
    name: 'Business & Product',
    skills: [
      'B2B Sales',
      'Dealer Relationship Management',
      'Territory Management',
      'Customer Retention',
      'Pricing & Proposals',
      'Negotiation',
    ],
  },
  {
    id: 'analytics-productivity',
    name: 'Analytics & Productivity',
    skills: [
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Word',
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    skills: ['AI-Assisted Development', 'Microsoft Office'],
  },
];
