export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  location?: string;
  client?: string;
  gallery?: string[];
  features?: string[];
}
