import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <ul className="nav-links">
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
