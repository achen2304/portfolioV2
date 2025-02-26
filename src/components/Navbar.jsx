export const Navbar = () => {
  return (
    <div className="navbar fixed left-0 right-0 z-50 flex justify-center mt-4 ">
      <nav className="flex w-1/3 rounded-box bg-base-300/50 shadow-lg p-4 px-8 border border-primary/60">
        <ul className="flex space-x-8 w-full justify-center text-base text-neutral-content">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
