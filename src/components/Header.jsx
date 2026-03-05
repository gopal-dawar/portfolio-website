import React, { useState } from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
// import { a } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "hover:text-orange-500 transition";

  return (
    <header className="bg-[#050505] sticky top-0 z-50">
      <nav className="flex items-center justify-between w-[90%] max-w-[1300px] mx-auto py-4 text-white">
        <HashLink smooth to="#home" className="text-2xl md:text-3xl font-bold">
          Gopal Dawar
        </HashLink>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li className={linkClass}>
            <HashLink smooth to="/">
              Home
            </HashLink>
          </li>
          <li className={linkClass}>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li className={linkClass}>
            <HashLink smooth to="#skills">
              Skills
            </HashLink>
          </li>
          <li className={linkClass}>
            <HashLink smooth to="#projects">
              Projects
            </HashLink>
          </li>
          <li className={linkClass}>
            <HashLink smooth to="#experience">
              Experience
            </HashLink>
          </li>
          <li className={linkClass}>
            <HashLink
              smooth
              to="#contact"
              className="px-6 py-2 border border-gray-600 rounded-full
                         hover:border-orange-500 hover:text-orange-500 transition"
            >
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-white text-sm">
            <li>
              <HashLink smooth to="#home" onClick={() => setIsOpen(false)}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about" onClick={() => setIsOpen(false)}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#experience"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 border border-gray-600 rounded-full
                           hover:border-orange-500 hover:text-orange-500 transition"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
