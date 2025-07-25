const TechCard = (props) => {
  return (
    <div className="flex items-center place-content-center gap-4 w-full h-20 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 rounded-xl border border-white/20 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
      <div>
        <img src={props.image.src} alt={props.image.alt} className="w-8 h-8 object-contain" />
      </div>
      <div className="">  
        <p className="text-white text-lg font-semibold tracking-wide">{props.name}</p>
        <span className="text-white/70 text-sm">{props.description}</span>
      </div>
    </div>
  )
}

export default TechCard;