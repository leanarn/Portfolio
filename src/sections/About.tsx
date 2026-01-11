import "./About.css";

export default function About() {

  const downloadAnaliticos = () => {
    const files = [
      "/analitico1.jpg",
      "/analitico2.jpg",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() || "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <section className="about" id="sobre-mi">
      <div className="about-grid">

        {/* IZQUIERDA */}
        <div className="about-text">
          <h2>Sobre mí</h2>

          <p>
            Mi nombre es Leandro Arnaldi, tengo 22 años y actualmente me encuentro cursando
            la Licenciatura en Informática en la Universidad Nacional de Hurlingham.
          </p>

          <p>
            Durante mi formación adquirí diversos conceptos de programación y desarrollo de software, con el objetivo
            de ponerlos en práctica en una oportunidad laboral, continuar aprendiendo y crecer profesionalmente dentro del área tecnológica.
          </p>

          {/* CERTIFICADOS */}
          <div className="about-certificates">
            <h3>Certificados académicos:</h3>

            <div className="certificates-buttons">
              <button
                onClick={downloadAnaliticos}
                className="certificate-btn"
              >
                Analítico
              </button>

              <a
                href="/materias-aprobadas.pdf"
                download
                className="certificate-btn"
              >
                Universitario
              </a>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div className="about-timeline">
          <h3>Formación académica</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2015 – 2022</span>
              <h4>Técnico en Informática</h4>
              <p>Secundaria Técnica San Juan XXIII</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2023 – 2026</span>
              <h4>Técnico Universitario en Programación</h4>
              <p>Universidad Nacional de Hurlingham</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2023 – 2028</span>
              <h4>Licenciatura en Informática</h4>
              <p>Universidad Nacional de Hurlingham</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
