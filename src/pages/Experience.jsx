import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="experience" className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Professional <span className="text-orange-500">Experience</span>
        </h2>

        <p
          className="text-gray-400 text-center max-w-3xl mx-auto mb-20"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Hands-on experience gained through internships and real-world
          projects, focused on backend development, teamwork, and practical
          problem solving.
        </p>

        {/* Experience Card */}
        <div
          data-aos="zoom-in"
          className="relative bg-[#111] p-10 rounded-3xl shadow-xl m-5
                     hover:shadow-orange-500/20 transition-all duration-500"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-2xl rounded-3xl -z-10" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Internship – Quick Heal Foundation
              </h3>
              <p className="text-orange-500 text-sm mt-1">
                Software Development Intern
              </p>
            </div>

            <div className="flex gap-2">
              <span
                className="inline-block px-4 py-1 text-sm rounded-full
                             bg-orange-500/10 text-orange-400"
              >
                2023
              </span>
              <span
                className="inline-block px-4 py-1 text-sm rounded-full
                             bg-orange-500/10 text-orange-400"
              >
                2023
              </span>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Gained real-world exposure to professional software development
            practices. Worked closely with mentors and team members to
            understand development workflows, coding standards, and problem
            solving in a production environment.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-orange-500">✔</span>
              Worked on real-time tasks and assignments under industry guidance
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">✔</span>
              Improved understanding of backend logic and application flow
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">✔</span>
              Collaborated with team members and followed coding best practices
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">✔</span>
              Strengthened debugging, communication, and problem-solving skills
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
