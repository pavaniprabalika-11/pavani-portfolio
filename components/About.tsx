"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed">
          I am Pavani Prabalika Mandla, a Computer Science Engineering
          graduate from NBKR Institute of Science and Technology with a
          strong passion for Artificial Intelligence, Machine Learning,
          Computer Vision and Full Stack Development.
        </p>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">
          I have built real-world projects including an AI Powered Fraud
          Management System for Aadhaar verification, Diabetic Retinopathy
          Detection using Deep Learning, Team Task Management Platforms and
          Data Analytics Dashboards.
        </p>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">
          My goal is to leverage technology to solve meaningful problems,
          create intelligent solutions and continuously grow as a Software
          Engineer and AI Professional.
        </p>

      </div>
    </motion.section>
  );
}
