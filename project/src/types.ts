export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  department?: string;
  gpa?: string;
  year?: string;
  percentage?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}