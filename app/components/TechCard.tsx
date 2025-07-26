import Image from "next/image";

type TechCardProps = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const TechCard = (props: TechCardProps) => {
  return (
    <div className="flex items-center place-content-center gap-4 w-full h-20 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 rounded-xl border border-white/20 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
      <div>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          />
      </div>
      <div className="">  
        <p className="text-white text-lg font-semibold tracking-wide">{props.name}</p>
        <span className="text-white/70 text-sm">{props.description}</span>
      </div>
    </div>
  )
}

export default TechCard;