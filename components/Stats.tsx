"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "7.86", label: "CGPA" },
    { value: "5+", label: "Certifications" },
    { value: "4", label: "Major Projects" },
    { value: "2", label: "Internships" },
  ];

  return (
    <motion.section
      className="bg-black text-white py-16 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              transition={{ duration: 0.2 }}
              className="
                p-8
                rounded-3xl
                border
                border-cyan-500/20
                text-center
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}