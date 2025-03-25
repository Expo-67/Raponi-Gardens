import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "../types/project";
import rubis from "../assets/rubis.jpg";
import karuri from "../assets/karuri.jpg";
import nyasingo from "../assets/nyasingo.jpg";
import dhl from "../assets/dhl.jpg";

export default function ProjectsPage() {
  // Sample project data - replace with your actual data
  const projects: Project[] = [
    {
      id: 1,
      title: "Rubis Commercial Landscaping",
      date: "December 2019 - October 2022",
      description:
        "A complete commercial landscape transformation for Rubis, featuring drought-resistant plants, efficient irrigation systems, and custom hardscaping that complements their corporate identity.",
      image: rubis,
      category: "Commercial",
      status: "completed",
    },
    {
      id: 2,
      title: "Ongoing project at Karuri level 4 hospital",
      date: "21st February 2025 to date",
      description:
        "A comprehensive landscaping project for Karuri Level 4 Hospital, featuring sustainable design elements, healing gardens, and accessible outdoor spaces for patients, staff, and visitors.",
      image: karuri,
      category: "Public Space",
      status: "ongoing",
    },
    {
      id: 3,
      title: "Nyansiongo Tea Factory Landscape Project",
      date: "October 2020 - August 2021",
      description:
        "Comprehensive landscape design and implementation for Nyansiongo Tea Factory, including creation of lawn gardens on 3 acres (12,000 SM) of land and installation of paving block driveways and walkways covering 2,000 SM.",
      image: nyasingo,
      category: "Commercial",
      status: "completed",
    },
    {
      id: 4,
      title: "DHL Corporate and Residential Projects",
      date: "August 2022",
      description:
        "A comprehensive landscape design for DHL's corporate campus and ground preparation at the former MD's residence in Kajiado, featuring sustainable design elements, efficient irrigation, and custom hardscaping.",
      image: dhl,
      category: "Commercial",
      status: "completed",
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
          {projects.map((project: Project) => (
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
        {project.status === "ongoing" && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            Ongoing
          </div>
        )}
        {project.status === "completed" && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            Completed
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{project.date}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link
          href={`/projectdetails/${project.id}`}
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
