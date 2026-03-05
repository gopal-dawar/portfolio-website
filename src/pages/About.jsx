import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // animate again on scroll
      mirror: true, // reverse on scroll up
    });

    AOS.refresh();
  }, []);

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
          This section highlights my educational background, practical
          experience, and continuous learning path in software development. It
          reflects how I have grown from understanding core computer science
          concepts to building real-world full-stack applications. Each
          milestone represents my commitment to improving skills and becoming a
          strong backend-focused engineer.
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
                  Built strong fundamentals in programming, databases, data
                  structures, and object-oriented concepts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex justify-end pl-10">
              <span className="absolute left-1/2 top-6 w-6 h-6 bg-orange-500 rounded-full -translate-x-1/2 z-10" />

              <div
                data-aos="fade-left"
                className="w-full md:w-[45%] bg-[#111] p-8 rounded-xl shadow-lg"
              >
                <time className="inline-block mb-3 text-sm bg-orange-500 text-black px-4 py-1 rounded">
                  2023
                </time>
                <h3 className="text-xl font-semibold mb-3">
                  Internship – Quick Heal Foundation
                </h3>
                <p className="text-gray-400">
                  Worked in a professional environment and learned real-world
                  software development workflows.
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
                  2024 – Present
                </time>
                <h3 className="text-xl font-semibold mb-3">
                  Java Full Stack Development
                </h3>
                <p className="text-gray-400">
                  Developing RESTful APIs using Spring Boot and building
                  responsive frontend applications using React.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative flex justify-end pl-10">
              <span className="absolute left-1/2 top-6 w-6 h-6 bg-orange-500 rounded-full -translate-x-1/2 z-10" />

              <div
                data-aos="fade-left"
                className="w-full md:w-[45%] bg-[#111] p-8 rounded-xl shadow-lg"
              >
                <time className="inline-block mb-3 text-sm bg-orange-500 text-black px-4 py-1 rounded">
                  Future
                </time>
                <h3 className="text-xl font-semibold mb-3">Career Goal</h3>
                <p className="text-gray-400">
                  To become a backend-focused engineer who designs scalable,
                  secure, and high-performance applications.
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
