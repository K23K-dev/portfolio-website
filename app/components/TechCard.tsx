const TechCard = (props) => {
  return (
    <div className="flex items-center justify-center w-32 h-16 bg-gradient-to-br 
    from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 
    text-white font-semibold text-lg border border-white/10">
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  )
}

export default TechCard;