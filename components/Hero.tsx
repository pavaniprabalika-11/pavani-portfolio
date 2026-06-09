"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const titles = [
    "AI & Machine Learning Engineer",
    "Computer Vision Developer",
    "Full Stack Developer",
    "Data Analytics Enthusiast",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Photo Section */}
        <div className="flex justify-center relative">
    <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

    <Image
      src="/images/pavani.jpeg"
      alt="Pavani"
      width={280}
      height={280}
      className="
relative
w-64
h-64
rounded-full
object-cover
object-top
border-4
border-cyan-400
shadow-[0_0_50px_rgba(34,211,238,0.6)]
"
    />
  </div>
        {/* Text Section */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Welcome To
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-white">
            PAVANI.EXE
          </h1>

          <p className="mt-6 text-2xl text-cyan-400 font-semibold h-10">
            {titles[currentTitle]}
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            Computer Science Engineering graduate passionate about
            Artificial Intelligence, Machine Learning, Computer Vision,
            Data Analytics and Full Stack Development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-400 text-black rounded-full font-bold hover:scale-105 transition duration-300"
            >
              Explore My Journey
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}