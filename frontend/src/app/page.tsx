"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/Logo Fin_page-0001(1).jpg";
import hero from "../app/assets/l16.jpg";
import about from "../app/assets/azb.jpg";
import { Leaf, Mail, MapPin, Phone, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-green-800 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Raponi Gardens logo"
              width={72}
              height={52}
              className="rounded-full"
            />
            <span className="ml-2 text-lg font-bold text-white">
              Raponi Gardens
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="hover:text-green-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-green-300 transition-colors"
            >
              About-us
            </Link>
            <Link
              href="#projects"
              className="hover:text-green-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Contact-us
            </Link>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-800 py-4">
            <nav className="flex flex-col items-center gap-4">
              <Link
                href="#services"
                className="hover:text-green-300 transition-colors py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="hover:text-green-300 transition-colors py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About-us
              </Link>
              <Link
                href="#projects"
                className="hover:text-green-300 transition-colors py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors w-4/5 text-center my-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact-us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <Image
            src={hero}
            alt="Beautiful landscaped garden"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0  bg-opacity-40">
            <div className="container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Landscaping & smart green solutions
                </h1>
                <Link
                  href="#projects"
                  className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <span className="text-green-600 font-medium">What we offer</span>
              <h2 className="text-3xl text-black font-bold mt-2">Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
              {[
                {
                  title: "Landscape Design",
                  icon: "🏞️",
                  description:
                    "Custom landscape design and planning to create your dream outdoor space.",
                },
                {
                  title: "Garden Maintenance",
                  icon: "🌱",
                  description:
                    "Regular garden care and maintenance to keep your outdoor space thriving year-round.",
                },
                {
                  title: "Outdoor Lighting",
                  icon: "💡",
                  description:
                    "Enhance beauty and security with custom outdoor lighting solutions.",
                },
                {
                  title: "Water Features",
                  icon: "💦",
                  description:
                    "Custom fountains, ponds, and water features to add tranquility to your landscape.",
                },
                {
                  title: "Sustainable Landscaping",
                  icon: "♻️",
                  description:
                    "Eco-friendly practices and designs that conserve water and support local ecosystems.",
                },
                {
                  title: "Hardscaping",
                  icon: "🧱",
                  description:
                    "Beautiful patios, walkways, and retaining walls to enhance your outdoor living areas.",
                },
                {
                  title: "Drainage Solutions",
                  icon: "🌧️",
                  description:
                    "Effective drainage systems to protect your property from water damage.",
                },
                {
                  title: "Environmental Conservation",
                  icon: "🌍",
                  description:
                    "Community projects and practices that support environmental sustainability.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <span className="text-green-600 font-medium">ABOUT US</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl text-black font-bold mb-6">
                  A beautiful garden is a work of art
                </h2>
                <p className="text-gray-800 mb-6">
                  For over a decade, we've been creating elegant and sustainable
                  landscapes that transform ordinary spaces into extraordinary
                  outdoor experiences. Our passion for plants and design
                  excellence drives everything we do.
                </p>
                <p className="text-gray-800 mb-6">
                  We take pride in our work, treating each garden as a unique
                  canvas that reflects the personality and lifestyle of our
                  clients. From concept to completion, we're committed to
                  exceeding your expectations.
                </p>
                <Link
                  href="#team"
                  className="text-green-600 font-medium hover:underline inline-flex items-center"
                >
                  Meet our team <span className="ml-1">→</span>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={about}
                  alt="Gardener working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-green-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">350+</h3>
                <p className="uppercase">Completed Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">12+</h3>
                <p className="uppercase">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">5+</h3>
                <p className="uppercase">Testimonials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-green-600 font-medium">OUR EXPERTS</span>
              <h2 className="text-3xl font-bold mt-2">Meet Our Team</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our dedicated team of professionals brings years of experience
                and passion to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Gideon Sikento",
                  role: "Manager",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Joyce Topiya",
                  role: "Secretary",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Jake Alison",
                  role: "Landscape Designer",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Landscape project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Landscape project 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Landscape project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Landscape project 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">
                  A peak of our landscape{" "}
                  <span className="text-yellow-500">creations</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Browse through our portfolio of completed projects. Each
                  landscape tells a unique story and showcases our commitment to
                  quality, sustainability, and beautiful design.
                </p>
                <Link
                  href="#"
                  className="border border-gray-300 px-8 py-2 rounded-md hover:bg-gray-100 transition-colors inline-block"
                >
                  PROJECTS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-green-600 font-medium">
                WHAT CLIENTS SAY
              </span>
              <h2 className="text-3xl font-bold mt-2">Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Homeowner",
                  quote:
                    "The team transformed our backyard into a beautiful oasis. Their attention to detail and knowledge of plants was impressive.",
                },
                {
                  name: "Michael Chen",
                  role: "Business Owner",
                  quote:
                    "We hired Gardener for our commercial property landscaping and couldn't be happier with the results. Professional, timely, and creative.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Homeowner",
                  quote:
                    "From design to implementation, the entire process was smooth and enjoyable. Our garden is now the envy of the neighborhood!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Have a project in mind or need maintenance for your garden?
                  Contact us today for a free consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p>123 Garden Street, Green City, GC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p>info@gardener.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md text-black"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md text-black"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-md text-black"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md text-black"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold mb-4"
              >
                <Leaf className="h-6 w-6" />
                <span>Raponi Gardens</span>
              </Link>
              <p className="text-green-300">
                Creating beautiful and sustainable landscapes since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-300 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-green-300 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:text-green-300 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="hover:text-green-300 transition-colors"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Tree Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Pruning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Landscaping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="mb-4 text-green-300">
                Subscribe to our newsletter for gardening tips and updates.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md text-black w-full"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>
              &copy; {new Date().getFullYear()} Raponi Gardens. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
