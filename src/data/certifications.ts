export interface Certification {
  id: string;
  name: string;
  platform: string;
  credentialUrl: string;
  credentialId: string;
}

export const certifications: Certification[] = [
  {
    id: 'python-coursera',
    name: 'Programming for Everybody',
    platform: 'Coursera',
    credentialUrl: '',
    credentialId: '',
  },
  {
    id: 'excel-udemy',
    name: 'Microsoft Excel — Excel from Beginner to Advanced',
    platform: 'Udemy',
    credentialUrl: '',
    credentialId: '',
  },
];
