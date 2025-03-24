"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/Logo Fin_page-0001(1).jpg";
import hero from "../app/assets/l16.jpg";
import about from "../app/assets/azb.jpg";
import gidy from "../app/assets/img2.jpg";
import joyce from "../app/assets/img4.jpg";
import wom from "../app/assets/wom.jpg";
import rubis from "../app/assets/rubis.jpg";
import karuri from "../app/assets/karuri.jpg";
import nyasingo from "../app/assets/nyasingo.jpg";
import dhl from "../app/assets/dhl.jpg";
import router from "next/router";

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
              src={logo || "/placeholder.svg"}
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
            src={hero || "/placeholder.svg"}
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
                  src={about || "/placeholder.svg"}
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
              <h2 className="text-3xl font-bold mt-2 text-black">
                Meet Our Team
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our dedicated team of professionals brings years of experience
                and passion to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              {[
                {
                  name: "Gideon Sikento",
                  role: "Manager",
                  image: gidy,
                },
                {
                  name: "Joyce Topiya",
                  role: "Secretary",
                  image: joyce,
                },
                {
                  name: "Jake Alison",
                  role: "Landscape Designer",
                  image: wom,
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
                <div className="relative h-64 rounded-lg overflow-hidden text-black">
                  <Image
                    src={rubis}
                    alt="Landscape project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden text-black">
                  <Image
                    src={karuri}
                    alt="Landscape project 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={nyasingo}
                    alt="Landscape project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden text-black">
                  <Image
                    src={dhl}
                    alt="Landscape project 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-black">
                  A peak of our landscape{" "}
                  <span className="text-yellow-500">creations</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Browse through our portfolio of completed projects. Each
                  landscape tells a unique story and showcases our commitment to
                  quality, sustainability, and beautiful design.
                </p>
                <Link
                  href="/projects"
                  className="border border-gray-900 px-8 py-2 rounded-md hover:bg-gray-600 bg-gray-500 text-white inline-block transition-colors"
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
                What clients say!
              </span>
              <h2 className="text-3xl font-bold mt-2 text-black">
                Testimonials
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
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
        {/* Contact Section */}`
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mt-2 text-black">
                    Contact us for your
                    <br />
                    Landscape
                    <br />
                    Solution Needs
                  </h2>
                </div>
                <p className="mb-8 text-gray-700">
                  Are you looking for top-quality landscaping experts
                  <br />
                  to your needs? Reach out to us.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-black">E-mail</p>
                      <p className="font-medium text-black">
                        otipogideon@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-black">Phone number</p>
                      <p className="font-medium text-black">
                        0710526821 / 0737492018
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start pt-2">
                    <div>
                      <p className="font-medium text-black">
                        P.O Box 574-00208 Ngong Hills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-black">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm text-black"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block mb-2 text-sm">
                        Industry
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="" disabled selected>
                            Select...
                          </option>
                          <option value="#">Landscape Design</option>
                          <option value="#">Garden Maintenance</option>
                          <option value="#">Hardscaping</option>
                          <option value="#">Enviromental Conservation</option>

                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Get a Solution
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Raponi Gardens logo"
                width={72}
                height={52}
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-bold text-white">
                Raponi Gardens
              </span>
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
                    Drainage installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Lanscape Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Garden Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Hardscaping
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>
              &copy; {new Date().getFullYear()} redevops- crafting digital
              experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
