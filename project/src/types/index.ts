export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}