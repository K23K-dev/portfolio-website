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
    <div className="bg-black w-full min-h-screen">
      <h1 className="text-white font-bold text-4xl mx-20 py-20">My skills</h1>
      <div className="grid grid-cols-4 max-w-5xl mx-auto gap-3">
        {skillsElements}
      </div>
    </div>
  );
};

export default Skills;