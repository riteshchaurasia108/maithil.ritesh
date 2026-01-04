
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface LearningPathItem {
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
}
