import type { Project } from "../data/projects";
import "./ProjectCard.css";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
