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

export const experiences: Experience[] = [];
