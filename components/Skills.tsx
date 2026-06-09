"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import AiExplainer from "@/components/AiExplainer";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    "Python",
    "YOLOv8",
    "EasyOCR",
    "OpenCV",
    "Streamlit",
    "Pandas",
    "PowerBI",
    "Flask",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "TailwindCSS",
    "MachineLearning",
    "DeepLearning",
    "ComputerVision",
  ];

  return (
    <motion.section
      id="skills"
      className="bg-black text-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-12">
          Click any skill and let AI explain it.
        </p>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <motion.button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                px-5 py-3
                rounded-full
                bg-cyan-500/10
                text-cyan-300
                hover:bg-cyan-500/20
                hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                transition-all
                duration-300
              "
            >
              {skill}
            </motion.button>
          ))}

        </div>

        {selectedSkill && (
          <AiExplainer
            title={selectedSkill}
            explanation={
              portfolio.technologies[
                selectedSkill as keyof typeof portfolio.technologies
              ]
            }
            onClose={() => setSelectedSkill(null)}
          />
        )}

      </div>
    </motion.section>
  );
}
