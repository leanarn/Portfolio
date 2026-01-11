export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio personal",
    description: "Sitio web personal desarrollado con React y TypeScript.",
    technologies: ["React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/tuusuario/portfolio",
    demoUrl: "https://tusitio.com",
  },
];
