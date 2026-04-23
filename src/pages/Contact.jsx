import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
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
    <section id="contact" className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <p
          className="text-gray-400 text-center max-w-3xl mx-auto mb-20"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Java Full Stack Developer with 1+ years of experience working on
          client-based applications using Java, Spring Boot, React.js, and
          MySQL. Open to full-time opportunities and collaborative projects.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">
              Let’s discuss opportunities and build impactful solutions
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              If you have a job opportunity, project requirement, or
              collaboration idea, feel free to reach out. I have hands-on
              experience in developing REST APIs, integrating frontend and
              backend systems, and working on client-based applications and
              real-world development workflows.
            </p>

            {/* Contact Links */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:gopaldawar45@gmail.com"
                  className="hover:text-orange-500 transition"
                >
                  gopaldawar45@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-orange-500" />
                <a
                  href="https://www.linkedin.com/in/gopaldawar/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-orange-500" />
                <a
                  href="https://github.com/gopal-dawar"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            data-aos="fade-left"
            className="relative bg-[#111] p-10 rounded-3xl shadow-xl
                       hover:shadow-orange-500/20 transition-all duration-500"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-2xl rounded-3xl -z-10" />

            <h4 className="text-xl font-semibold mb-6">Quick Contact</h4>

            <p className="text-gray-400 text-sm mb-6">
              For quick communication, feel free to reach out via email. I
              usually respond within 24 hours.
            </p>

            <a
              href="mailto:gopaldawar45@gmail.com"
              aria-label="Send email to Gopal"
              className="inline-block px-8 py-3 rounded-full
             bg-orange-500 text-black font-semibold
             hover:bg-orange-400 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
