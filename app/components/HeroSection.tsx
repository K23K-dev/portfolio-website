const HeroSection = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center
    
    ">
      <h2 className="text-white text-xl">
        Hi&#33; I&apos;m Kevin Kou
      </h2>
      <h1 className="text-white font-bold text-3xl">
        I am an aspiring SWE studying at Georgia Tech
      </h1>
      <div className="flex flex-row gap-4 mt-8">  
        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md font-semibold hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">
          My Projects
        </button>
        <a className="px-6 py-2 bg-white text-indigo-700 rounded-lg shadow-md font-semibold border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
        href="/resume/Resume_Template.pdf"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;