export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio React + TypeScript",
    description:
      "Portfolio personal desarrollado en React + TypeScript, con animaciones, diseño responsive y buenas prácticas de frontend.",
    technologies: ["React", "TypeScript", "CSS", "Vite"],
    githubUrl: "https://github.com/leanarn/Portfolio",
    demoUrl: "", // cuando lo publiques, ponés la URL real
  },
  {
    id: 2,
    title: "Sistema de Gestión",
    description:
      "Aplicación web para gestión de datos con operaciones CRUD y validaciones.",
    technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
    githubUrl: "https://github.com/leanarn/nombre-del-repo",
  },
  {
    id: 3,
    title: "Proyecto Académico",
    description:
      "Este proyecto esta creado con Vite y React, el cual tiene como fin crear una aplicación web donde los clientes puedan ver la carta de productos, armar pedidos simples y enviar consultas o reservas.",
    technologies: ["React", "Vite", "JavaScript"],
    githubUrl: "https://github.com/leanarn/TP1-CIU-UNAHUR",
  },
];
