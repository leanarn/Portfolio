import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
