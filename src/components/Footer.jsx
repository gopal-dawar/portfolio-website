import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-gray-400 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          
          {/* Branding */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Gopal <span className="text-orange-500">Dawar</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Java Full Stack Developer with 1+ years of experience building 
              scalable backend systems and responsive web applications using 
              Spring Boot and React.js.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-orange-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Let’s Connect
            </h3>

            <div className="flex gap-5 mb-6">
              <a
                href="https://github.com/gopal-dawar"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[#111] hover:bg-orange-500 hover:text-black transition transform hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gopaldawar/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[#111] hover:bg-orange-500 hover:text-black transition transform hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:gopaldawar45@gmail.com"
                className="p-3 rounded-full bg-[#111] hover:bg-orange-500 hover:text-black transition transform hover:-translate-y-1"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="text-sm">
              Open to full-time opportunities and real-world development projects.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-10 " />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} Gopal Dawar. All rights reserved.</p>

          <a
            href="#home"
            className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition"
          >
            Back to top <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;