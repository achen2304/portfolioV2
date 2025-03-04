import { FaHome, FaSun, FaMoon } from 'react-icons/fa';
import { MdCardTravel } from 'react-icons/md';
import { FaNewspaper, FaScrewdriverWrench } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div
      className={`navbar fixed left-0 right-0 z-50 flex justify-center mt-2 md:mt-4 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex w-[98%] sm:w-[95%] md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-box shadow-lg p-3 px-20 md:p-4 mx-1 sm:mx-2 md:mx-0 border-2 border-primary/20 bg-base-100">
        <ul className="flex justify-between md:justify-center items-center w-full md:gap-8 text-primary/80">
          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              <span className="hidden md:inline text-sm md:text-base">
                Home
              </span>
              <FaHome className="inline md:hidden w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              <span className="hidden md:inline text-sm md:text-base">
                Work
              </span>
              <MdCardTravel className="inline md:hidden w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              <span className="hidden md:inline text-sm md:text-base">
                Projects
              </span>
              <FaScrewdriverWrench className="inline md:hidden w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              <span className="hidden md:inline text-sm md:text-base">
                Contact
              </span>
              <FaNewspaper className="inline md:hidden w-5 h-5" />
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost btn-sm text-primary hover:scale-110 text-primary/80 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
