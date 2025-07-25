

const ProjectCard = (props) => {
  return (
    <div className="flex">
      <img src={props.image.src} className="w-32 h-32"/>
      <p className="text-white text-2xl font-semibold">{props.name}</p>
    </div>
  )
}

export default ProjectCard