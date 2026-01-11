export type Skill = {
  id: number;
  name: string;
  category: "Frontend" | "Backend" | "Herramientas";
};

export const skills: Skill[] = [
  { id: 1, name: "HTML", category: "Frontend" },
  { id: 2, name: "CSS", category: "Frontend" },
  { id: 3, name: "JavaScript", category: "Frontend" },
  { id: 4, name: "TypeScript", category: "Frontend" },
  { id: 5, name: "React", category: "Frontend" },
  { id: 6, name: "Git", category: "Herramientas" },
];
