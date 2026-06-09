"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import AiExplainer from "@/components/AiExplainer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedTechnology, setSelectedTechnology] =
    useState<string | null>(null);

  return (
    <motion.section
      className="bg-black text-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
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
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              className="
                p-8
                rounded-3xl
                border
                border-cyan-500/20
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((tech, techIndex) => (
                  <motion.button
                    key={techIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTechnology(tech);
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                      hover:bg-cyan-500/20
                      hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                      transition-all
                    "
                  >
                    {tech}
                  </motion.button>
                ))}

              </div>

              <motion.button
                onClick={() => setSelectedProject(project)}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-8
                  px-6
                  py-3
                  bg-cyan-400
                  text-black
                  rounded-xl
                  font-semibold
                "
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}

        </div>

        {selectedProject && (
          <AiExplainer
            title={selectedProject.title}
            explanation={selectedProject.explanation}
            onClose={() => setSelectedProject(null)}
          />
        )}

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
    </motion.section>
  );
}