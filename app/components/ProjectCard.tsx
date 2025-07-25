const ProjectCard = (props) => {
  return (
    <>
      <div className="">
        {props.image.src}
        {props.name}
      </div>
    </>
  )
}

export default ProjectCard