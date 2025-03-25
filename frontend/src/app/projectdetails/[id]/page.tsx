import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle } from "lucide-react";
import type { Project } from "../../types/project";
import rubis from "../../assets/rubis.jpg";
import karuri from "../../assets/karuri.jpg";
import nyasingo from "../../assets/nyasingo.jpg";
import dhl from "../../assets/dhl.jpg";
import headerimg from "../../assets/rubis 2.jpg";
import karuri2 from "../../assets/karuri2.jpg";
import karuri3 from "../../assets/karuri3.jpg";
import karuri4 from "../../assets/karuri4.jpg";
import nyasingo2 from "../../assets/nyasingo2.jpg";

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
      date: "December 2019 - October 2022",
      location: "Multiple Locations, Kenya",
      client: "Rubis Energies PLC",
      description:
        "A complete commercial landscape transformation for Rubis, featuring drought-resistant plants, efficient irrigation systems, and custom hardscaping that complements their corporate identity.",
      longDescription:
        "This comprehensive commercial landscaping project for Rubis Energies PLC transformed multiple petrol stations across Kenya into sustainable and visually striking environments. The design incorporated drought-resistant native plants to reduce water consumption while maintaining year-round visual interest. We implemented state-of-the-art irrigation systems with smart controllers to optimize water usage based on weather conditions. Custom hardscaping elements were designed to complement the company's branding and architecture, creating a cohesive visual identity throughout all locations. Several locations also received high-quality cabro paving to enhance durability and aesthetics.",
      image: rubis,
      headerimage: headerimg,
      gallery: [
        rubis,
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Commercial",
      features: [
        "Drought-resistant native plantings",
        "Smart irrigation systems",
        "Custom hardscaping elements",
        "Cabro paving installation",
        "Corporate branding integration",
        "Low-maintenance landscape design",
      ],
      subProjects: [
        {
          name: "Rubis Kayole",
          description: "Creation of green spaces/landscaping",
          completed: true,
        },
        {
          name: "Rubis Juja",
          description: "Creation of green spaces/landscaping",
          completed: true,
        },
        {
          name: "Rubis Cabanas",
          description: "Creation of green spaces/landscaping",
          completed: true,
        },
        {
          name: "Rubis Pangani",
          description: "Creation of green spaces/landscaping",
          completed: true,
        },
        {
          name: "Rubis Jogoo Road",
          description: "Creation of green spaces/landscaping and cabro paving",
          completed: true,
        },
        {
          name: "Rubis Mai Mahiu",
          description: "Creation of green spaces/landscaping and cabro paving",
          completed: true,
        },
        {
          name: "Rubis Ngara",
          description: "Creation of green spaces/landscaping and cabro paving",
          completed: true,
        },
      ],
      status: "completed",
    },
    {
      id: 2,
      title: "Ongoing project at Karuri level 4 hospital",
      date: "21st February 2025 to date",
      location: "Karuri, Kiambu County, Kenya",
      client: "County govt of Kiambu",
      description:
        "A comprehensive landscaping project for Karuri Level 4 Hospital, featuring sustainable design elements, healing gardens, and accessible outdoor spaces for patients, staff, and visitors.",
      longDescription:
        "This ongoing landscaping project at Karuri Level 4 Hospital aims to create a healing environment that supports patient recovery, staff wellbeing, and visitor comfort. Working closely with the County Government of Kiambu, we've designed therapeutic outdoor spaces that incorporate evidence-based design principles for healthcare environments. The project includes accessible pathways, shaded seating areas and sensory gardens with native plants. Special attention has been given to creating low-maintenance landscapes that can thrive in the local climate while providing year-round visual interest.",
      image: karuri,
      headerimage: karuri,
      gallery: [karuri, karuri2, karuri3, karuri4],
      category: "Healthcare",
      features: [
        "Therapeutic healing gardens",
        "Accessible pathways ",
        "Low-maintenance landscape design",
      ],
      status: "ongoing",
    },
    {
      id: 3,
      title: "Nyansiongo Tea Factory Landscape Project",
      date: "October 2020 - August 2021",
      location: "Matuwa site, Nyamira County, Kenya",
      client: "Nyansiongo Tea Factory",
      description:
        "Comprehensive landscape design and implementation for Nyansiongo Tea Factory, including creation of lawn gardens on 3 acres (12,000 SM) of land and installation of paving block driveways and walkways covering 2,000 SM.",
      longDescription:
        "This extensive landscape project for Nyansiongo Tea Factory at their Matuwa site in Nyamira County transformed a large 3-acre (12,000 square meter) area into beautifully designed lawn gardens with integrated driveways and walkways. Our team developed a comprehensive landscape plan that complemented the factory's existing architecture while creating functional outdoor spaces for employees and visitors. The project included extensive earthworks, installation of proper drainage systems, and establishment of lush lawn areas using drought-resistant grass varieties suitable for the local climate. We also designed and installed 2,000 square meters of paving block driveways and walkways, creating clear circulation paths throughout the property while ensuring durability and low maintenance. The completed project has significantly enhanced the visual appeal of the factory grounds while improving functionality and reducing long-term maintenance requirements.",
      image: nyasingo,
      headerimage: nyasingo,
      gallery: [nyasingo, nyasingo2],
      category: "Commercial",
      features: [
        "3-acre (12,000 SM) lawn garden design and installation",
        "2,000 SM paving block driveways and walkways",
        "Comprehensive drainage systems",
        "Drought-resistant plant selections",
        "Integrated irrigation solutions",
        "Low-maintenance landscape design",
      ],
      status: "completed",
    },
    //dhl project
    {
      id: 4,
      title: "DHL Corporate and Residential Projects",
      date: "August 2022",
      location: "Nairobi & Kajiado, Kenya",
      client: "DHL Express and Former MD",
      description:
        "A comprehensive landscape design for DHL's corporate campus and ground preparation at the former MD's residence in Kajiado, featuring sustainable design elements, efficient irrigation, and custom hardscaping.",
      longDescription:
        "Our partnership with DHL encompassed two significant projects: a complete redesign of their corporate campus landscape and ground preparation work at the residence of former DHL MD, Mr. Andrew Mutuma, in Kajiado. The corporate campus project involved redesigning the landscape around their regional headquarters to create a more sustainable, attractive, and functional outdoor environment. Our design incorporated the company's brand colors through seasonal plantings while focusing on drought-tolerant species that would thrive in the local climate with minimal water and maintenance. The entrance features a dramatic water-efficient fountain that creates a memorable first impression for visitors. Employee areas include shaded outdoor meeting spaces and walking paths that encourage physical activity during breaks. The parking areas were redesigned with bioswales and rain gardens to manage stormwater runoff naturally, while strategic tree placement provides shade and reduces the heat island effect. Additionally, we completed extensive ground preparation work at Mr. Mutuma's private residence in Kajiado, creating the foundation for a beautiful residential landscape that harmonizes with the natural surroundings while providing functional outdoor living spaces.",
      image: dhl,
      headerimage: dhl,
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
        "Residential ground preparation",
      ],
      subProjects: [
        {
          name: "DHL Corporate Campus",
          description:
            "Complete landscape redesign with sustainable elements and brand integration",
          completed: true,
        },
        {
          name: "Former MD's Residence",
          description:
            "Ground preparation at Mr. Andrew Mutuma's home in Kajiado",
          completed: true,
        },
      ],
    },
    // Additional projects
  ];
  const project = projects.find((p) => p.id === projectId) || projects[0];

  // Get header image - use project image if headerImage is not available
  const headerImage = project.headerimage || project.image;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={headerImage || "/placeholder.svg"}
            alt={`${project.title} background`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end">
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
              {project.status === "ongoing" && (
                <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Ongoing Project
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

            {project.subProjects && project.subProjects.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Locations & Scope
                </h2>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <ul className="divide-y divide-gray-100">
                    {project.subProjects.map((subProject, index) => (
                      <li key={index} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {subProject.name}
                            </h3>
                            <p className="text-gray-600 mt-1">
                              {subProject.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

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
                      href={`/projectdetails/${relatedProject.id}`}
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
