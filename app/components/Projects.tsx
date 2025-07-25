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
    <div className="bg-black w-full min-h-screen">
      <h1 className="text-white font-bold text-4xl mx-20 py-20 ">My Projects</h1>
      {portfolioElements}
    </div>
  );
};

export default Projects;