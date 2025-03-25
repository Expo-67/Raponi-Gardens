import type { StaticImageData } from "next/image";

export interface SubProject {
  name: string;
  description: string;
  completed: boolean;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  longDescription?: string;
  image: string | StaticImageData;
  headerimage?: string | StaticImageData;
  category: string;
  location?: string;
  client?: string;
  gallery?: (string | StaticImageData)[];
  features?: string[];
  subProjects?: SubProject[];
  status?: "completed" | "ongoing" | "planned";
}
