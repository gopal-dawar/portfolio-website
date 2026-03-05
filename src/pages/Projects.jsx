import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Grocery Store 1",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    desc: "A fully responsive grocery store website offering interactive products, search, authentication, and smooth user experience.",
    img: "/proPhoto/groceryStore1.png",
    url: "https://gopal-dawar.github.io/Grocery_store_website",
  },
  {
    title: "Medicine Store Web Application",
    category: "Full Stack",
    tech: ["Spring Boot", "React", "MySQL"],
    desc: "Full stack application with CRUD operations and role-based access.",
    img: "/proPhoto/medicine_store.png",
  },
  {
    title: "Travel Website",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    desc: "Animated travel landing page with smooth UI interactions.",
    img: "/projects/travel.png",
  },
  {
    title: "REST API Practice",
    category: "Backend",
    tech: ["Spring Boot", "JPA", "Postman"],
    desc: "Practice project focused on REST APIs and HTTP methods.",
    img: "/projects/api.png",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    tech: ["React", "Tailwind", "AOS"],
    desc: "Personal portfolio showcasing skills, journey, and projects.",
    img: "/projects/portfolio.png",
  },
  {
    title: "Mini Java Projects",
    category: "Mini Projects",
    tech: ["Core Java"],
    desc: "Collection of small Java programs to strengthen fundamentals.",
    img: "/projects/mini.png",
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
