import Image from "next/image"

type ProjectCardProps = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="grid grid-rows-2 justify-center bg-red-400 w-2xl">
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={576}
        height={576}
        className="w-xl object-cover"/>
      <p className="text-white text-2xl font-semibold mx-auto">{props.name}</p>
    </div>
  )
}

export default ProjectCard