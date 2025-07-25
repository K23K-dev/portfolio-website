import { portfolioProjects } from "../data";
import ProjectCard from "./ProjectCard";


const portfolioElements = portfolioProjects.map(project => {
  return (
    <ProjectCard
      key={project.id}
      {...project}
    />
  )
})

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1e293b] via-[#23272f] to-[#18181b]" />
      <h1 className="text-white font-bold text-4xl mx-20 py-20 ">My Projects</h1>
      <div >
        {portfolioElements}
      </div>
    </div>
  );
};

export default Projects;