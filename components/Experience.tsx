"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import AiExplainer from "@/components/AiExplainer";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  return (
    <motion.section
      id="experience"
      className="bg-black text-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Experience
        </h2>

        <p className="text-gray-400 mb-12">
          Click any experience to let AI explain it.
        </p>

        <div className="grid gap-6">

          {portfolio.experience.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedExp(exp)}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                text-left
                p-6
                rounded-2xl
                border
                border-cyan-500/20
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {exp.company}
              </h3>

              <p className="text-gray-400 mt-2">
                {exp.role}
              </p>
            </motion.button>
          ))}

        </div>

        {selectedExp && (
          <AiExplainer
            title={`${selectedExp.role} - ${selectedExp.company}`}
            explanation={selectedExp.explanation}
            onClose={() => setSelectedExp(null)}
          />
        )}

      </div>
    </motion.section>
  );
}