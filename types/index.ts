// types/index.ts

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
}