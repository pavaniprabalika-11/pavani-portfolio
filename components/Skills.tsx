"use client";

import { useState } from "react";
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
    <section id="skills" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-12">
          Click any skill and let AI explain it.
        </p>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className="px-5 py-3 rounded-full bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              {skill}
            </button>
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
    </section>
  );
}