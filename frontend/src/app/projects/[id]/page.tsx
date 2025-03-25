import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import type { Project } from "../../types/project";
import rubis from "../../assets/rubis.jpg";
import karuri from "../../assets/karuri.jpg";
import nyasingo from "../../assets/nyasingo.jpg";
import dhl from "../../assets/dhl.jpg";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // In a real application, you would fetch this data from an API or database
  // based on the params.id
  const projectId = Number.parseInt(params.id);

  // Sample project data - replace with your actual data fetching logic
  const projects: Project[] = [
    {
      id: 1,
      title: "Rubis Commercial Landscaping",
      date: "March 2023",
      location: "Nairobi, Kenya",
      client: "Rubis Energy",
      description:
        "A complete commercial landscape transformation for Rubis, efficient irrigation systems, and custom hardscaping that complements their corporate identity.",
      longDescription:
        "This comprehensive commercial landscaping project for Rubis Energy transformed their corporate headquarters into a sustainable and visually striking environment. The design incorporated drought-resistant native plants to reduce water consumption while maintaining year-round visual interest. We implemented a state-of-the-art irrigation system with smart controllers to optimize water usage based on weather conditions. Custom hardscaping elements were designed to complement the company's branding and architecture, creating a cohesive visual identity throughout the property. The project also included outdoor seating areas for employees, enhanced lighting for safety and aesthetics, and a rainwater harvesting system to further reduce environmental impact.",
      image: rubis,
      gallery: [
        rubis,
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Commercial",
      features: [
        "Drought-resistant native plantings",
        "Smart irrigation system",
        "Custom hardscaping elements",
        "Outdoor employee areas",
        "Rainwater harvesting system",
        "Energy-efficient LED lighting",
      ],
    },
    {
      id: 2,
      title: "Karuri Residential Garden",
      date: "January 2023",
      location: "Karuri, Kenya",
      client: "Private Residence",
      description:
        "A luxurious residential garden design featuring native plants, a water feature, and outdoor living spaces that blend seamlessly with the natural surroundings.",
      longDescription:
        "This residential garden project in Karuri transformed a standard yard into a luxurious outdoor living space that extends the homeowner's living area while celebrating the natural beauty of the region. The design focused on creating multiple outdoor rooms for different activities - dining, lounging, and entertaining. We incorporated a diverse palette of native plants to provide year-round interest while supporting local wildlife and reducing water needs. A custom water feature serves as the garden's focal point, providing soothing sounds and visual interest. Natural stone pathways connect the different garden areas, while carefully placed lighting extends the usability of the space into the evening hours.",
      image: karuri,
      gallery: [
        karuri,
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Residential",
      features: [
        "Native plant garden",
        "Custom water feature",
        "Natural stone pathways",
        "Outdoor dining area",
        "Ambient lighting design",
        "Low-maintenance plantings",
      ],
    },
    {
      id: 3,
      title: "Nyasingo Park Renovation",
      date: "November 2022",
      location: "Nyasingo, Kenya",
      client: "City Council",
      description:
        "Revitalization of a community park with sustainable landscaping practices, including rainwater harvesting, native plantings, and eco-friendly materials.",
      longDescription:
        "The Nyasingo Park renovation project transformed a neglected public space into a vibrant community gathering place. Our team worked closely with the city council to create a sustainable design that would serve the diverse needs of the community while minimizing environmental impact. The park features extensive native plantings that require minimal water and maintenance, a rainwater harvesting system that supplies irrigation needs, and permeable pathways that reduce runoff. Play areas were designed with natural materials and inclusive features to accommodate children of all abilities. The central plaza provides space for community events and markets, while quiet seating areas offer places for relaxation and contemplation.",
      image: nyasingo,
      gallery: [
        nyasingo,
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Public Space",
      features: [
        "Native plant landscaping",
        "Rainwater harvesting system",
        "Permeable pathways",
        "Inclusive play areas",
        "Community event space",
        "Solar-powered lighting",
      ],
    },
    {
      id: 4,
      title: "DHL Corporate Campus",
      date: "August 2022",
      location: "Nairobi, Kenya",
      client: "DHL Express",
      description:
        "A comprehensive landscape design for DHL's corporate campus, featuring seasonal color displays, efficient irrigation, and low-maintenance plantings.",
      longDescription:
        "The DHL Corporate Campus project involved redesigning the landscape around their regional headquarters to create a more sustainable, attractive, and functional outdoor environment. Our design incorporated the company's brand colors through seasonal plantings while focusing on drought-tolerant species that would thrive in the local climate with minimal water and maintenance. The entrance features a dramatic water-efficient fountain that creates a memorable first impression for visitors. Employee areas include shaded outdoor meeting spaces and walking paths that encourage physical activity during breaks. The parking areas were redesigned with bioswales and rain gardens to manage stormwater runoff naturally, while strategic tree placement provides shade and reduces the heat island effect.",
      image: dhl,
      gallery: [
        dhl,
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Commercial",
      features: [
        "Brand-integrated plantings",
        "Water-efficient fountain",
        "Outdoor meeting areas",
        "Bioswales and rain gardens",
        "Strategic shade trees",
        "Low-maintenance landscape design",
      ],
    },
    // Additional projects would be defined here
  ];

  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.date}</span>
              </div>
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{project.location}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Project Overview
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {project.gallery && project.gallery.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              {project.features && project.features.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Project Features
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Interested in a similar project?
              </h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss how we can transform your landscape
                into something extraordinary.
              </p>
              <Link
                href="/contact"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-md inline-block text-center transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(
                (p: Project) =>
                  p.id !== projectId && p.category === project.category
              )
              .slice(0, 3)
              .map((relatedProject: Project) => (
                <div
                  key={relatedProject.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {relatedProject.title}
                    </h3>
                    <Link
                      href={`/projects/${relatedProject.id}`}
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium"
                    >
                      View Project
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
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
