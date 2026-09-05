export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    id: 'midland-agro',
    role: 'Sales Associate',
    company: 'Midland Agro Pvt. Ltd.',
    location: 'Lucknow',
    startDate: 'Jun 2024',
    endDate: 'Dec 2025',
    responsibilities: [
      'Managed and grew B2B relationships with 80+ dealer accounts across assigned territory, strengthening customer retention and repeat-order cycles, supporting brand loyalty.',
      'Prepared and presented B2B custom pricing quotes and sales proposals for corporate clients, supporting pricing discussions and order conversion for 100+ units.',
      'Coordinated with warehouse and logistics teams for order fulfillment and supply chain coordination, ensuring accurate, on-time delivery of bulk orders.',
      'Performed sales data analysis across dealer accounts to identify top-performing products and underperforming territories, supporting territory management and targeted sales strategies.',
      'Resolved client escalations and service complaints directly, maintaining dealer trust and minimizing account churn across the assigned territory.',
    ],
    achievements: [],
    tools: [
      'B2B Sales',
      'Dealer Relationship Management',
      'Territory Management',
      'Pricing & Proposals',
      'Microsoft Excel',
    ],
    logo: '',
  },
];
