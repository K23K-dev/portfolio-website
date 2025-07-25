'use client'

import { Inter } from "next/font/google"
import { useEffect, useState } from "react";

const headline = "I am an aspiring SWE studying at Georgia Tech"

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(headline.slice(0, i + 1));
      i++;
      if (i === headline.length) clearInterval(interval);
    }, 35); // Adjust speed here (ms per letter)
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1e293b]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 opacity-30 rounded-full filter blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full filter blur-2xl pointer-events-none -z-10"></div>
      <h2 className="text-white text-xl font-mono">
        Hi&#33; I&apos;m Kevin Kou
      </h2>
      <h1 className="text-white font-bold text-3xl font-mono">
        {displayed}
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