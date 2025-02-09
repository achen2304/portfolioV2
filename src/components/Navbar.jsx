export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4 color-white">
          <li>
            <a href="#about">About</a>
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
