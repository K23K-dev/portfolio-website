import { techCardItems } from "../data";
import TechCard from "./TechCard";

const skillsElements = techCardItems.map(skill => {
  return (
    <TechCard
      key={skill.id}
      {...skill}
    />
  )
})

const Skills = () => {
  return (
    <div id="skills" className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1e293b]" />
      <h1 className="text-white font-bold text-4xl mx-20 py-20">Tech Stack</h1>
      <div className="grid grid-cols-4 max-w-5xl mx-auto gap-3">
        {skillsElements}
      </div>
    </div>
  );
};

export default Skills;