import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          <i>
            My Journey as a <span className="text-orange-500">Developer</span>
          </i>
        </h2>

        <p
          className="text-gray-400 text-center max-w-5xl mx-auto m-5 p-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          This section highlights my journey from learning core computer science concepts 
          to working on real-world client-based applications. It reflects my growth as a 
          Java Full Stack Developer with hands-on experience in building scalable backend 
          systems and integrating modern frontend technologies.
        </p>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500 via-yellow-400 to-purple-500 -translate-x-1/2" />

          <div className="space-y-10">

            {/* Card 1 */}
            <div className="relative flex justify-start pr-10">
              <span className="absolute left-1/2 top-6 w-6 h-6 bg-orange-500 rounded-full -translate-x-1/2 z-10" />

              <div
                data-aos="fade-right"
                className="w-full md:w-[45%] bg-[#111] p-8 rounded-xl shadow-lg"
              >
                <time className="inline-block mb-3 text-sm bg-orange-500 text-black px-4 py-1 rounded">
                  2021 – 2024
                </time>
                <h3 className="text-xl font-semibold mb-3">
                  B.Sc in Computer Science
                </h3>
                <p className="text-gray-400">
                  Built strong fundamentals in programming, databases, data structures, 
                  and object-oriented programming concepts.
                </p>
              </div>
            </div>

            {/* Card 2 (Now your main experience) */}
            <div className="relative flex justify-end pl-10">
              <span className="absolute left-1/2 top-6 w-6 h-6 bg-orange-500 rounded-full -translate-x-1/2 z-10" />

              <div
                data-aos="fade-left"
                className="w-full md:w-[45%] bg-[#111] p-8 rounded-xl shadow-lg"
              >
                <time className="inline-block mb-3 text-sm bg-orange-500 text-black px-4 py-1 rounded">
                  Feb 2025 – Present
                </time>
                <h3 className="text-xl font-semibold mb-3">
                  Software Developer – Delfine India Technology
                </h3>
                <p className="text-gray-400">
                  Working on client-based web applications using Java, Spring Boot, React.js, and MySQL. 
                  Involved in developing REST APIs, integrating frontend and backend systems, and resolving 
                  issues during testing and development.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex justify-start pr-10">
              <span className="absolute left-1/2 top-6 w-6 h-6 bg-orange-500 rounded-full -translate-x-1/2 z-10" />

              <div
                data-aos="fade-right"
                className="w-full md:w-[45%] bg-[#111] p-8 rounded-xl shadow-lg"
              >
                <time className="inline-block mb-3 text-sm bg-orange-500 text-black px-4 py-1 rounded">
                  Present – Future
                </time>
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Learning & Growth
                </h3>
                <p className="text-gray-400">
                  Continuously improving backend development skills and working on real-world projects 
                  to build scalable, secure, and high-performance applications.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;