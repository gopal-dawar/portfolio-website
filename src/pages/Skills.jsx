import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-down"
        >
          Skills <span className="text-orange-500">& </span>
          Technologies
        </h2>

        <p
          className="text-gray-400 text-center max-w-3xl mx-auto mb-20"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          A focused collection of technical skills built through consistent
          practice and real-world development. These skills form the foundation
          of my software engineering journey.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Languages */}
          <div
            data-aos="fade-up"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Core Java",
                "Java 8 (Streams, Lambda)",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "SQL",
              ].map((skill, i) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Framework */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Spring Boot",
                "Spring MVC",
                "Spring Data JPA",
                "Hibernate",
                "JPA",
              ].map((skill, i) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Service */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Web Services
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "REST API",
                "HTTP Methods",
                "JSON",
                "JWT (Basic)",
                "Swagger",
                "Postman",
              ].map((skill, i) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Database
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "MySQL",
                "PostgreSQL",
                "Database Design",
                "Joins",
                "Indexes",
              ].map((skill, i) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Git",
                "GitHub",
                "Maven",
                "Postman",
                "VS Code",
                "IntelliJ IDEA",
              ].map((skill, i) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-[#111] p-8 rounded-2xl shadow-lg
                       transition-all duration-500
                       hover:-translate-y-3 hover:shadow-orange-500/25"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Cloud
            </h3>
            <div className="flex flex-wrap gap-4">
              {["AZ-900", "Microsoft Azure Fundamentals", "Cloud Basics"].map(
                (skill, i) => (
                  <span
                    key={skill}
                    data-aos="zoom-in"
                    data-aos-delay={200 + i * 80}
                    className="px-4 py-2 text-sm rounded-full
                             bg-orange-500/10 text-orange-400
                             transition-all duration-300
                             hover:bg-orange-500 hover:text-black
                             hover:scale-110"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
