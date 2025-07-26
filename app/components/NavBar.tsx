const NavBar = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-96 h-16 bg-black flex items-center justify-center gap-8 rounded-xl shadow-lg opacity-70 z-100">
      <a href="#hero" className="text-white">Home</a>
      <a href="#skills" className="text-white">About</a>
      <a href="#projects" className="text-white">Projects</a>
      <a href="#contact" className="text-white">Contact</a>
    </div>
  )
}

export default NavBar