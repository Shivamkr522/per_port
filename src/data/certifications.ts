export interface Certification {
  id: string;
  name: string;
  platform: string;
  /** Path to the original PDF — used for the "Download Certificate" button. */
  credentialUrl: string;
  /** Pre-rendered page images (one per PDF page) — used for the in-page viewer. */
  previewImages: string[];
  credentialId: string;
}

export const certifications: Certification[] = [
  {
    id: 'python-coursera',
    name: 'Programming for Everybody (Getting Started with Python)',
    platform: 'Coursera',
    credentialUrl: '/certificates/programming-for-everybody.pdf',
    previewImages: ['/certificates/images/programming-for-everybody-page-1.jpg'],
    credentialId: 'Z4MQ4EY7ZBWC',
  },
  {
    id: 'excel-udemy',
    name: 'Microsoft Excel — Excel from Beginner to Advanced',
    platform: 'Udemy',
    credentialUrl: '/certificates/excel-beginner-to-advanced.pdf',
    previewImages: ['/certificates/images/excel-beginner-to-advanced-page-1.jpg'],
    credentialId: 'UC-4dbcbcac-450b-435d-832a-1f34e1062575',
  },
  {
    id: 'genai-foundations',
    name: 'GenAI Foundations for Working Professionals',
    platform: 'Starweaver (FutureLearn)',
    credentialUrl: '/certificates/genai-foundations-for-working-professionals.pdf',
    previewImages: [
      '/certificates/images/genai-foundations-for-working-professionals-page-1.jpg',
      '/certificates/images/genai-foundations-for-working-professionals-page-2.jpg',
    ],
    credentialId: 'rsyf6t7',
  },
  {
    id: 'ai-strategy-business-leaders',
    name: 'AI Strategy for Business Leaders and Managers with ChatGPT and Machine Learning',
    platform: 'Packt (FutureLearn)',
    credentialUrl: '/certificates/ai-strategy-for-business-leaders.pdf',
    previewImages: [
      '/certificates/images/ai-strategy-for-business-leaders-page-1.jpg',
      '/certificates/images/ai-strategy-for-business-leaders-page-2.jpg',
    ],
    credentialId: 'h21432a',
  },
  {
    id: 'ai-for-everyone',
    name: 'Artificial Intelligence for Everyone',
    platform: 'Universiti Malaya (FutureLearn)',
    credentialUrl: '/certificates/artificial-intelligence-for-everyone.pdf',
    previewImages: [
      '/certificates/images/artificial-intelligence-for-everyone-page-1.jpg',
      '/certificates/images/artificial-intelligence-for-everyone-page-2.jpg',
    ],
    credentialId: 'ea4o52w',
  },
];
