"use client";

import { useState, useEffect } from "react";
import PavaniAIAvatar from "@/components/PavaniAIAvatar";

export default function AskPavani() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  

  const speak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 1.1;
    speech.volume = 1;
    speech.lang = "en-US";

    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();

      const femaleVoice =
        voices.find((v) => v.name.includes("Microsoft Zira")) ||
        voices.find((v) => v.name.includes("Samantha")) ||
        voices.find((v) => v.name.toLowerCase().includes("female")) ||
        voices[0];

      speech.voice = femaleVoice;

      window.speechSynthesis.cancel();
      speech.onstart = () => {
  setIsSpeaking(true);
};

speech.onend = () => {
  setIsSpeaking(false);
};

window.speechSynthesis.speak(speech);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    } else {
      setVoiceAndSpeak();
    }
  };

  const respond = (text: string) => {
  setAnswer(text);
  setQuestion("");
  speak(text);
};
  const handleAsk = () => {
    const q = question.toLowerCase();

    if (q.includes("aadhaar") || q.includes("fraud")) {
      respond(
        "My AI Powered Fraud Management System verifies Aadhaar documents using YOLOv8, EasyOCR, OpenCV and Streamlit. It detects Aadhaar cards, classifies them as Real or Fake and extracts important details automatically."
      );

    
    } else if (
  q.includes("project") ||
  q.includes("projects")
) {
  respond(
    "I have worked on four major projects. First, an AI Powered Fraud Management System that verifies Aadhaar documents using YOLOv8, EasyOCR, OpenCV and Streamlit. Second, a Diabetic Retinopathy Detection system that uses Deep Learning to identify eye diseases from retinal images. Third, a Team Task Manager web application for task assignment, tracking and collaboration. Fourth, a Student Performance Analytics dashboard that analyzes academic data and generates insights using Power BI and Python."
  );
}    
else if (
  q.includes("diabetic") ||
  q.includes("retinopathy")
) {
  respond(
    "My Diabetic Retinopathy Detection project uses Deep Learning and Computer Vision techniques to analyze retinal images and identify signs of diabetic eye disease at an early stage."
  );
}

else if (
  q.includes("team task") ||
  q.includes("task manager")
) {
  respond(
    "Team Task Manager is a full stack application designed to assign, track and manage team tasks efficiently. It improves collaboration and productivity."
  );
}

else if (
  q.includes("student performance")
) {
  respond(
    "Student Performance Analytics is a data analytics project that analyzes student academic performance and generates meaningful insights through dashboards and visualizations."
  );
}
    else if (
      q.includes("education") ||
      q.includes("study") ||
      q.includes("college") ||
      q.includes("degree")
    ) {
      respond(
        "I completed my B.Tech in Computer Science and Engineering at NBKR Institute of Science and Technology. My current CGPA is 7.86. I completed Intermediate at Narayana Junior College with 90.3 percent."
      );
    } else if (
      q.includes("cgpa") ||
      q.includes("score") ||
      q.includes("marks")
    ) {
      respond(
        "My current B.Tech CGPA is 7.86. I scored 90.3 percent in Intermediate and 9.67 GPA in SSC."
      );
    } else if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("tech stack")
    ) {
      respond(
        "My skills include Python, YOLOv8, EasyOCR, OpenCV, Flask, MongoDB, Next.js, TypeScript, Tailwind CSS, Power BI, Machine Learning, Deep Learning and Computer Vision."
      );
    } else if (q.includes("yolo") || q.includes("yolov8")) {
      respond(
        "YOLOv8 stands for You Only Look Once Version 8. It is a real time object detection model known for high speed and accuracy. I used it in my Aadhaar Fraud Detection project."
      );
    } else if (q.includes("easyocr") || q.includes("ocr")) {
      respond(
        "EasyOCR is a Python OCR library used to extract text from images. In my Aadhaar Verification System, it extracts Aadhaar Number and Name automatically."
      );
    } else if (
      q.includes("internship") ||
      q.includes("experience")
    ) {
      respond(
        "I completed an AI Internship at Infosys Springboard and a Python Full Stack Internship at Think Champ Private Limited."
      );
    } else if (
      q.includes("certification") ||
      q.includes("certificate")
    ) {
      respond(
        "I hold certifications including Google AI Essentials, IBM Artificial Intelligence Fundamentals, Deloitte Data Analytics Job Simulation, Infosys AI Internship and Python Full Stack Internship."
      );
    } else if (
      q.includes("project") ||
      q.includes("projects")
    ) {
      respond(
        "My major projects include AI Powered Fraud Management System, Diabetic Retinopathy Detection, Team Task Manager and Student Performance Analytics."
      );
    } else if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("linkedin") ||
      q.includes("github")
    ) {
      respond(
        "You can contact me through my LinkedIn profile, GitHub profile or the contact section available in this portfolio."
      );
    } else if (
      q.includes("hire") ||
      q.includes("why should we hire you")
    ) {
      respond(
        "I have practical experience in Artificial Intelligence, Machine Learning, Computer Vision, Data Analytics and Full Stack Development. I enjoy solving real world problems through technology and continuously learning new skills."
      );
    } else {
      respond(
        "I can answer questions about my education, CGPA, projects, certifications, internships, skills and technologies. Try asking What is YOLOv8, Tell me about your Aadhaar project, or What are your skills."
      );
    }
  };

  return (
  <section
    id="ask-pavani"
    className="bg-black text-white py-24 px-6"
  >
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

      {/* Avatar */}
      <PavaniAIAvatar isSpeaking={isSpeaking} />

      {/* Heading */}
      <h2 className="text-6xl font-bold mt-10 mb-4">
        Ask Pavani AI
      </h2>

      <p className="text-gray-400 mb-8 max-w-2xl">
        Ask about my projects, skills, education or experience.
      </p>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

        <button
          onClick={() =>
            speak(
              "Hello, I am Pavani Prabalika, a Computer Science Engineering graduate at NBKR Institute of Science and Technology. I specialize in Artificial Intelligence, Machine Learning, Computer Vision and Full Stack Development."
            )
          }
          className="px-5 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          🎙 Introduce Yourself
        </button>

        <button
          onClick={() =>
            speak(
              "My major projects include AI Powered Fraud Management System, Diabetic Retinopathy Detection, Team Task Manager and Student Performance Analytics."
            )
          }
          className="px-5 py-3 bg-zinc-800 hover:bg-cyan-400 hover:text-black rounded-xl transition"
        >
          💼 Explain Projects
        </button>

        <button
          onClick={() =>
            speak(
              "My skills include Python, YOLOv8, OpenCV, EasyOCR, Machine Learning, Deep Learning, Next.js, TypeScript and Power BI."
            )
          }
          className="px-5 py-3 bg-zinc-800 hover:bg-cyan-400 hover:text-black rounded-xl transition"
        >
          🛠 Explain Skills
        </button>

        <button
          onClick={() =>
            speak(
              "I hold certifications including Google AI Essentials, IBM Artificial Intelligence Fundamentals, Deloitte Data Analytics Job Simulation and Infosys AI Internship."
            )
          }
          className="px-5 py-3 bg-zinc-800 hover:bg-cyan-400 hover:text-black rounded-xl transition"
        >
          🏆 Explain Certifications
        </button>

      </div>

      {/* Search */}
      <div className="flex gap-4 w-full max-w-4xl">

        <input
  type="text"
  placeholder="Ask about my projects, skills, education or experience..."
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  }}
  className="flex-1 bg-zinc-900 border border-cyan-500/20 rounded-xl px-4 py-4 outline-none"
/>

        <button
          onClick={handleAsk}
          className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold hover:scale-105 transition"
        >
          Ask
        </button>

      </div>

      {/* Answer */}
      {answer && (
        <div className="mt-8 w-full max-w-4xl p-6 rounded-2xl border border-cyan-500/20 bg-zinc-900 text-left">
          <p className="text-gray-200 leading-relaxed">
            {answer}
          </p>
        </div>
      )}

    </div>
  </section>
);
}