import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "../types/project";

export default function ProjectsPage() {
  // Sample project data - replace with your actual data
  const projects: Project[] = [
    {
      id: 1,
      title: "Rubis Commercial Landscaping",
      date: "March 2023",
      description:
        "A complete commercial landscape transformation for Rubis, featuring drought-resistant plants, efficient irrigation systems, and custom hardscaping that complements their corporate identity.",
      image: "/rubis.jpg", // Replace with your actual image path
      category: "Commercial",
    },
    {
      id: 2,
      title: "Karuri Residential Garden",
      date: "January 2023",
      description:
        "A luxurious residential garden design featuring native plants, a water feature, and outdoor living spaces that blend seamlessly with the natural surroundings.",
      image: "/karuri.jpg", // Replace with your actual image path
      category: "Residential",
    },
    {
      id: 3,
      title: "Nyasingo Park Renovation",
      date: "November 2022",
      description:
        "Revitalization of a community park with sustainable landscaping practices, including rainwater harvesting, native plantings, and eco-friendly materials.",
      image: "/nyasingo.jpg", // Replace with your actual image path
      category: "Public Space",
    },
    {
      id: 4,
      title: "DHL Corporate Campus",
      date: "August 2022",
      description:
        "A comprehensive landscape design for DHL's corporate campus, featuring seasonal color displays, efficient irrigation, and low-maintenance plantings.",
      image: "/dhl.jpg", // Replace with your actual image path
      category: "Commercial",
    },
    {
      id: 5,
      title: "Riverside Retreat",
      date: "June 2022",
      description:
        "A tranquil riverside landscape featuring native riparian plants, natural stone pathways, and custom outdoor seating areas that maximize the water views.",
      image: "/placeholder.svg?height=600&width=800", // Replace with your actual image
      category: "Residential",
    },
    {
      id: 6,
      title: "City Center Plaza",
      date: "April 2022",
      description:
        "Urban landscape redesign with drought-tolerant plantings, permeable paving, and modular seating areas that create a welcoming public space in the heart of the city.",
      image: "/placeholder.svg?height=600&width=800", // Replace with your actual image
      category: "Public Space",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our portfolio of landscape design and implementation
            projects. Each project reflects our commitment to quality,
            sustainability, and beautiful design.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
            All Projects
          </button>
          <button className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            Commercial
          </button>
          <button className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            Residential
          </button>
          <button className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            Public Space
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-black text-sm font-medium px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{project.date}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium"
        >
          View Project Details
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
