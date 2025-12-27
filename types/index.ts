// Type definitions for the portfolio website

export interface SocialLink {
  platform: "github" | "linkedin" | "website" | "email";
  url: string;
  icon: React.ReactNode;
}

export interface PersonalInfo {
  name: string;
  title: string;
  titles: string[];
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  bio: string;
  education: {
    university: string;
    degree: string;
    years: string;
  };
  goals: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | "Halen";
  description: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "internship";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-5
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
