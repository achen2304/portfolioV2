import {
  FaHome,
  FaSun,
  FaMoon,
  FaEnvelope,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';
import { MdCardTravel } from 'react-icons/md';
import { FaNewspaper, FaScrewdriverWrench } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);

    if (isHomePage) {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        if (window.scrollY < 100) {
          setActiveSection('home');
          return;
        }

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100
        ) {
          setActiveSection('contact');
          return;
        }

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.id || section.getAttribute('data-section');

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (sectionId) {
              const id = sectionId.toLowerCase();
              if (id === 'about' || id === 'hero') {
                setActiveSection('home');
              } else {
                setActiveSection(id);
              }
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="navbar fixed left-0 right-0 z-50 flex justify-center mt-2 md:mt-4">
      <nav className="flex w-[98%] sm:w-[95%] md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-box shadow-lg p-3 px-16 md:p-4 mx-1 sm:mx-2 md:mx-0 border-2 border-primary/20 bg-base-100">
        <ul className="flex justify-between md:justify-center items-center w-full md:gap-8 text-primary/80">
          <li className="relative group">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className={`transition-all duration-200 hover:text-primary inline-flex flex-col items-center
                ${activeSection === 'home' ? 'text-primary' : ''}`}
            >
              <span className="hidden md:inline text-sm md:text-base">
                Home
              </span>
              <FaHome className="inline md:hidden w-5 h-5" />
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 
                ${
                  activeSection === 'home' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              />
            </a>
          </li>
          <li className="relative group">
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className={`transition-all duration-200 hover:text-primary inline-flex flex-col items-center
                ${activeSection === 'experience' ? 'text-primary' : ''}`}
            >
              <span className="hidden md:inline text-sm md:text-base">
                Work
              </span>
              <MdCardTravel className="inline md:hidden w-5 h-5" />
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 
                ${
                  activeSection === 'experience' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              />
            </a>
          </li>
          <li className="relative group">
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`transition-all duration-200 hover:text-primary inline-flex flex-col items-center
                ${activeSection === 'skills' ? 'text-primary' : ''}`}
            >
              <span className="hidden md:inline text-sm md:text-base">
                Skills
              </span>
              <FaScrewdriverWrench className="inline md:hidden w-5 h-5" />
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 
                ${
                  activeSection === 'skills' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              />
            </a>
          </li>
          <li className="relative group">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className={`transition-all duration-200 hover:text-primary inline-flex flex-col items-center
                ${activeSection === 'projects' ? 'text-primary' : ''}`}
            >
              <span className="hidden md:inline text-sm md:text-base">
                Projects
              </span>
              <FaLightbulb className="inline md:hidden w-5 h-5" />
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 
                ${
                  activeSection === 'projects' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              />
            </a>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`transition-all duration-200 hover:text-primary inline-flex flex-col items-center
                ${activeSection === 'contact' ? 'text-primary' : ''}`}
            >
              <span className="hidden md:inline text-sm md:text-base">
                Contact
              </span>
              <FaEnvelope className="inline md:hidden w-5 h-5" />
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 
                ${
                  activeSection === 'contact' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
              />
            </a>
          </li>
          <li className="relative group">
            <button
              onClick={toggleTheme}
              className="transition-all duration-300 hover:text-primary inline-flex flex-col items-center lg:pt-[6px] pt-[1px]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5 transition-transform duration-500 hover:rotate-[360deg]" />
              ) : (
                <FaMoon className="w-5 h-5 transition-transform duration-500 hover:rotate-[360deg]" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
