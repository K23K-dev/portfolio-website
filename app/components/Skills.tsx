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
    <div className="bg-black min-h-screen">
      <h2 className="text-white font-bold text-2xl">My skills</h2>
      <div className="flex">
        {skillsElements}
      </div>
    </div>
  );
};

export default Skills;