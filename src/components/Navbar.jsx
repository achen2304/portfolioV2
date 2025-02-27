import { useEffect } from 'react';

export const Navbar = () => {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="navbar fixed left-0 right-0 z-50 flex justify-center mt-4">
      <nav className="flex w-full md:w-1/3 rounded-box shadow-lg p-4 mx-4 md:mx-0 border-2 border-primary/20 transition-shadow backdrop-blur-[2px] bg-base-100/5">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 w-full text-base text-primary/80">
          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all duration-200 hover:text-primary hover:scale-110 inline-block"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost btn-sm text-primary hover:scale-110"
              aria-label="Toggle theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 swap-on"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
