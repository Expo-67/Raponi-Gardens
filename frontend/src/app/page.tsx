"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/Logo Fin_page-0001(1).jpg";
import hero from "../app/assets/l16.jpg";
import about from "../app/assets/azb.jpg";
import gidy from "../app/assets/img6.jpg";
import joyce from "../app/assets/img5.jpg";
import wom from "../app/assets/wom.jpg";
import rubis from "../app/assets/rubis.jpg";
import karuri from "../app/assets/karuri.jpg";
import nyasingo from "../app/assets/nyasingo.jpg";
import dhl from "../app/assets/dhl.jpg";
import { motion } from "framer-motion";
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  X,
  Menu,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-green-800/95 backdrop-blur-sm shadow-md"
            : "bg-green-800"
        } text-white`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Raponi Gardens logo"
              width={72}
              height={52}
              className="rounded-full border-2 border-yellow-400"
            />
            <span className="ml-3 text-xl font-bold text-white">
              Raponi Gardens
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              About Us
            </Link>
            <Link
              href="#projects"
              className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="bg-yellow-500 text-green-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-wide font-bold shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
            >
              Contact Us
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-800 py-4 border-t border-green-700"
          >
            <nav className="flex flex-col items-center gap-4">
              <Link
                href="#services"
                className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#projects"
                className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="bg-yellow-500 text-green-900 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors w-4/5 text-center my-2 font-bold shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] lg:h-[800px]">
          <Image
            src={hero || "/placeholder.svg?height=800&width=1200"}
            alt="Beautiful landscaped garden"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-6 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="inline-block bg-yellow-500/90 text-green-900 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                  PROFESSIONAL LANDSCAPING SERVICES
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Transforming Spaces into{" "}
                  <span className="text-yellow-400">Natural Paradises</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Create a sustainable, stunning outdoor environment that
                  enhances your property's beauty and value with our expert
                  landscaping solutions.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-x-4 flex flex-wrap gap-4"
                >
                  <Link
                    href="#projects"
                    className="inline-flex items-center bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200 shadow-lg"
                  >
                    View Our Portfolio
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors"
                  >
                    Contact-us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-3">
                <Leaf className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl text-green-900 font-bold mt-2">
                Expert Landscaping Solutions
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index}
                  className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-green-100 group bg-white"
                >
                  <div className="text-4xl mb-5 bg-green-50 h-16 w-16 flex items-center justify-center rounded-full group-hover:bg-green-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-8 text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start mb-3">
                <Leaf className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  ABOUT US
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl text-green-900 font-bold mb-8 leading-tight">
                  A beautiful garden is a{" "}
                  <span className="text-yellow-500">work of art</span>
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  For over a decade, we've been creating elegant and sustainable
                  landscapes that transform ordinary spaces into extraordinary
                  outdoor experiences. Our passion for plants and design
                  excellence drives everything we do.
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  We take pride in our work, treating each garden as a unique
                  canvas that reflects the personality and lifestyle of our
                  clients. From concept to completion, we're committed to
                  exceeding your expectations.
                </p>
                <Link
                  href="#team"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
                >
                  Meet our team <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={about || "/placeholder.svg"}
                  alt="Gardener working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-green-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1500')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { number: "10+", label: "Completed Projects" },
                { number: "12+", label: "Years Experience" },
                { number: "5+", label: "Testimonials" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-block p-6 rounded-full bg-white/10 mb-4">
                    <div className="bg-yellow-500 text-green-900 h-16 w-16 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {stat.number.split("+")[0]}
                      </span>
                      {stat.number.includes("+") && (
                        <span className="text-xl font-bold">+</span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="uppercase tracking-wider text-yellow-300 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-3">
                <Leaf className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  OUR EXPERTS
                </span>
              </div>
              <h2 className="text-4xl font-bold mt-2 text-green-900">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                Our dedicated team of professionals brings years of experience
                and passion to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
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
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-72 w-72 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-center space-x-4">
                        <a
                          href="#"
                          className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                className="order-2 md:order-1 grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={rubis || "/placeholder.svg"}
                      alt="Landscape project 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={karuri || "/placeholder.svg"}
                      alt="Landscape project 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={nyasingo || "/placeholder.svg"}
                      alt="Landscape project 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={dhl || "/placeholder.svg"}
                      alt="Landscape project 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-start mb-3">
                  <Leaf className="text-green-600 mr-2 h-5 w-5" />
                  <span className="text-green-600 font-semibold uppercase tracking-wider">
                    OUR PORTFOLIO
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-green-900 leading-tight">
                  A peek at our landscape{" "}
                  <span className="text-yellow-500">creations</span>
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  Browse through our portfolio of completed projects. Each
                  landscape tells a unique story and showcases our commitment to
                  quality, sustainability, and beautiful design.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-medium shadow-lg"
                >
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-3">
                <Quote className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  What clients say
                </span>
              </div>
              <h2 className="text-4xl font-bold mt-2 text-green-900">
                Testimonials
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
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
                    "We hired Raponi Gardens for our commercial property landscaping and couldn't be happier with the results. Professional, timely, and creative.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Homeowner",
                  quote:
                    "From design to implementation, the entire process was smooth and enjoyable. Our garden is now the envy of the neighborhood!",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-600"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-green-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center justify-start mb-3">
                    <Mail className="text-green-600 mr-2 h-5 w-5" />
                    <span className="text-green-600 font-semibold uppercase tracking-wider">
                      Get in touch
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-green-900 leading-tight">
                    Contact us for your
                    <br />
                    <span className="text-yellow-500">Landscape</span>
                    <br />
                    Solution Needs
                  </h2>
                </div>
                <p className="mb-8 text-gray-700 text-lg">
                  Are you looking for top-quality landscaping experts
                  <br />
                  to transform your space? Reach out to us today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">E-mail</p>
                      <p className="font-medium text-green-900 text-lg">
                        otipogideon@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone number</p>
                      <p className="font-medium text-green-900 text-lg">
                        0710526821 / 0737492018
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium text-green-900 text-lg">
                        P.O Box 574-00208 Ngong Hills
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl text-black">
                  <h3 className="text-2xl font-bold mb-6 text-green-900">
                    Get a Free Quote
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Service Needed
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors appearance-none"
                        >
                          <option value="" disabled selected>
                            Select a service...
                          </option>
                          <option value="landscape-design">
                            Landscape Design
                          </option>
                          <option value="garden-maintenance">
                            Garden Maintenance
                          </option>
                          <option value="hardscaping">Hardscaping</option>
                          <option value="environmental-conservation">
                            Environmental Conservation
                          </option>
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
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                    >
                      Get Your Free Quote
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt="Raponi Gardens logo"
                  width={80}
                  height={60}
                  className="rounded-full border-2 border-yellow-400"
                />
                <span className="ml-3 text-xl font-bold text-white">
                  Raponi Gardens
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Creating beautiful, sustainable landscapes that enhance your
                property and lifestyle.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-yellow-300">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-yellow-300">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Drainage Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Garden Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Hardscaping
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Raponi Gardens - All rights
              reserved | Designed by redevops
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
