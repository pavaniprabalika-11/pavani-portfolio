"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import AiExplainer from "@/components/AiExplainer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [selectedTechnology, setSelectedTechnology] =
    useState<string | null>(null);

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-12">
          Click Learn More to explore the project.
          Click any technology to let AI explain it.
        </p>

        <div className="grid gap-8">

          {portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTechnology(tech);
                    }}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-8 px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
              >
                Learn More
              </button>
            </div>
          ))}

        </div>

        {/* Project Explanation */}
        {selectedProject && (
          <AiExplainer
            title={selectedProject.title}
            explanation={selectedProject.explanation}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Technology Explanation */}
        {selectedTechnology && (
          <AiExplainer
            title={selectedTechnology}
            explanation={
              portfolio.technologies[
                selectedTechnology as keyof typeof portfolio.technologies
              ]
            }
            onClose={() => setSelectedTechnology(null)}
          />
        )}

      </div>
    </section>
  );
}