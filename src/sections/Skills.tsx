import "./Skills.css";
import {
  FaPython,
  FaJs,
  FaDatabase,
  FaNetworkWired,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Skills() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {/* PYTHON */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[0] = el;
          }}
        >
          <div className="skill-header">
            <FaPython className="skill-icon" />
            <h3>Python</h3>
          </div>

          <p>
            Finalicé un curso de capacitación de 48 horas en el lenguaje Python,
            adquiriendo conocimientos fundamentales de programación y lógica algorítmica.
          </p>

          <a href="/cert-python.pdf" download className="skill-btn">
            Certif
          </a>
        </div>

        {/* JAVASCRIPT */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[1] = el;
          }}
        >
          <div className="skill-header">
            <FaJs className="skill-icon" />
            <h3>JavaScript</h3>
          </div>

          <p>
            Conocimientos en JavaScript aplicados al desarrollo web,
            creando interfaces dinámicas y manejando lógica del lado del cliente.
          </p>

          <a href="/cert-javascript.pdf" download className="skill-btn">
            Certif
          </a>
        </div>

        {/* REACT + TYPESCRIPT */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[2] = el;
          }}
        >
          <div className="skill-header">
            <FaReact className="skill-icon" />
            <h3>React + TypeScript</h3>
          </div>

          <p>
            Desarrollo de interfaces modernas utilizando React con TypeScript,
            aplicando componentes reutilizables, tipado estricto,
            manejo de estados, hooks y buenas prácticas de frontend.
          </p>
        </div>

        {/* MYSQL */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[3] = el;
          }}
        >
          <div className="skill-header">
            <FaDatabase className="skill-icon" />
            <h3>Oracle MySQL</h3>
          </div>

          <p>
            Formación en bases de datos relacionales utilizando MySQL,
            realizando consultas SQL, modelado de datos y normalización.
          </p>

          <a href="/cert-mysql.pdf" download className="skill-btn">
            Certif
          </a>
        </div>

        {/* CCNA */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[4] = el;
          }}
        >
          <div className="skill-header">
            <FaNetworkWired className="skill-icon" />
            <h3>CCNA</h3>
          </div>

          <p>
            Capacitación en redes bajo el programa CCNA,
            incorporando conceptos de redes, direccionamiento IP,
            protocolos y seguridad básica.
          </p>

          <a href="/cert-ccna.pdf" download className="skill-btn">
            Certif
          </a>
        </div>

        {/* SOPORTE TÉCNICO */}
        <div
          className="skill-card"
          ref={(el) => {
            if (el) cardsRef.current[5] = el;
          }}
        >
          <div className="skill-header">
            <FaTools className="skill-icon" />
            <h3>Soporte Técnico</h3>
          </div>

          <p>
            Experiencia laboral como Soporte Técnico en Telecom,
            realizando diagnóstico y resolución de incidencias,
            soporte a usuarios, mantenimiento de equipos,
            configuración de redes y atención técnica remota y presencial.
          </p>
        </div>
      </div>
    </section>
  );
}
