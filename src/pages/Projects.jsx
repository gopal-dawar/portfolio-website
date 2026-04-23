import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  // ⭐ MAIN FULL STACK PROJECT
  {
    title: "Medicine Store Web Application",
    category: "Full Stack",
    tech: ["Spring Boot", "React.js", "MySQL", "JWT"],
    desc: "Full stack pharmacy management system with inventory, order management, authentication, and REST API integration.",
  },

  // ⭐ SECURITY / AUTH
  {
    title: "Spring Security Practice",
    category: "Backend",
    tech: ["Spring Boot", "Spring Security", "JWT"],
    desc: "Authentication and authorization system with role-based access control using Spring Security.",
  },

  // ⭐ CORE BACKEND SYSTEMS
  {
    title: "Bank Account Management System",
    category: "Backend",
    tech: ["Spring Boot", "JPA", "MySQL"],
    desc: "Bank account system with CRUD operations and exception handling.",
  },
  {
    title: "Movie Ticket Booking System",
    category: "Backend",
    tech: ["Spring Boot", "JPA", "MySQL"],
    desc: "Backend system for managing movie ticket booking and user operations.",
  },
  {
    title: "Online Course Registration System",
    category: "Backend",
    tech: ["Spring Boot", "REST API", "MySQL"],
    desc: "System for managing course registration with REST API endpoints.",
  },
  {
    title: "Patient Record System",
    category: "Backend",
    tech: ["Spring Boot", "MySQL"],
    desc: "Application to manage patient records and medical data efficiently.",
  },
  {
    title: "Vehicle Registration System",
    category: "Backend",
    tech: ["Spring Boot", "REST API", "MySQL"],
    desc: "System for storing and managing vehicle registration data.",
  },
  {
    title: "Student Record Management System",
    category: "Backend",
    tech: ["Spring Boot", "REST API"],
    desc: "Application for managing student records using layered architecture.",
  },

  // ⭐ INVENTORY / MANAGEMENT SYSTEMS
  {
    title: "Product Inventory Manager",
    category: "Backend",
    tech: ["Spring Boot", "MySQL"],
    desc: "Product inventory system for managing stock, price, and product data.",
  },
  {
    title: "Employee Directory System",
    category: "Backend",
    tech: ["Spring Boot", "REST API"],
    desc: "System for managing employee data using REST APIs.",
  },
  {
    title: "Library Book Catalog",
    category: "Backend",
    tech: ["Spring Boot", "MySQL"],
    desc: "Library system for managing books and catalog operations.",
  },

  // ⭐ HIBERNATE PROJECTS
  {
    title: "Patient Record System (Hibernate)",
    category: "Backend",
    tech: ["Java", "Hibernate"],
    desc: "CRUD-based patient management system using Hibernate.",
  },
  {
    title: "Vehicle Registration System (Hibernate)",
    category: "Backend",
    tech: ["Java", "Hibernate"],
    desc: "Vehicle management system with CRUD operations using Hibernate.",
  },
  {
    title: "Library Catalog (Hibernate)",
    category: "Backend",
    tech: ["Java", "Hibernate"],
    desc: "Book catalog system using Hibernate ORM.",
  },
  {
    title: "Product Inventory Manager (Hibernate)",
    category: "Backend",
    tech: ["Java", "Hibernate"],
    desc: "Inventory management system with CRUD operations.",
  },
  {
    title: "Employee Directory (Hibernate)",
    category: "Backend",
    tech: ["Java", "Hibernate"],
    desc: "Employee management system using Hibernate ORM.",
  },

  // ⭐ OTHER SPRING PROJECTS
  {
    title: "Feedback Collection System",
    category: "Backend",
    tech: ["Spring Boot"],
    desc: "System for collecting and managing user feedback.",
  },
  {
    title: "File Upload & Download System",
    category: "Backend",
    tech: ["Spring Boot"],
    desc: "Application for uploading and downloading files with backend processing.",
  },

  // ⭐ FRONTEND PROJECTS
  {
    title: "Portfolio Website",
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "AOS"],
    desc: "Personal portfolio showcasing projects, skills, and experience.",
    url: "https://gopal-dawar.github.io/portfolio-website/",
  },
  {
    title: "Grocery Store Website",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    desc: "Responsive grocery store UI with product listing and cart features.",
    url: "https://gopal-dawar.github.io/Grocery_store_website",
  },
  {
    title: "Traveling Website",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Animated travel website with smooth UI interactions.",
  },

  // ⭐ PRACTICE / COLLECTION
  {
    title: "React Practice Projects",
    category: "Frontend",
    tech: ["React"],
    desc: "Collection of React practice projects demonstrating components and hooks.",
  },
  {
    title: "Java Practice Code",
    category: "Backend",
    tech: ["Java"],
    desc: "Collection of Java programs for strengthening core concepts.",
  },
  {
    title: "Interview Preparation Questions",
    category: "General",
    tech: ["Java", "DSA"],
    desc: "Collection of interview preparation questions and solutions.",
  },
];

const categories = [
  "All",
  "Backend",
  "Full Stack",
  "Frontend",
  "Mini Projects",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-down"
        >
          My <span className="text-orange-500">Projects</span>
        </h2>

        <p
          className="text-gray-400 text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          A curated collection of projects demonstrating my skills across
          backend, frontend, and full stack development.
        </p>

        {/* Categories */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all
                ${
                  activeCategory === cat
                    ? "bg-orange-500 text-black"
                    : "border border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-[#111] rounded-xl shadow-lg overflow-hidden
                         transition-all duration-500
                         hover:-translate-y-3 hover:shadow-orange-500/25"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-top object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-orange-500/10 text-orange-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex  justify-between items-center">
                  <a href={project.url} className="bg-orange-600 p-2 rounded">
                    Live Demo
                  </a>
                  <span className="text-xs text-gray-500">
                    Category: {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
