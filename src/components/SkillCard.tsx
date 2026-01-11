import type { Skill } from "../data/skills";
import "./SkillCard.css";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className="skill-card">
      <span>{skill.name}</span>
      <small>{skill.category}</small>
    </div>
  );
}
