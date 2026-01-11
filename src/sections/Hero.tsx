import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        {/* TEXTO */}
        <div className="hero-text">
          <h1>Leandro Arnaldi</h1>
          <h2>Programador Web</h2>

          <p>
            Bienvenido a mi portafolio. Me dedico al desarrollo de interfaces web modernas y escalables,
  combinando buenas prácticas, diseño limpio y foco en la experiencia de usuario.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="primary">
              Ver proyectos
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              GitHub
            </a>

            <a
              href="/cv-leandro-arnaldi.pdf"
              download
              className="secondary"
            >
              CV
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/profile.jpeg" alt="Foto de Leandro Arnaldi" />
          </div>
        </div>
      </div>
    </section>
  );
}
