"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import AiExplainer from "@/components/AiExplainer";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section id="certifications" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Certifications
        </h2>

        <p className="text-gray-400 mb-12">
          Click any certification to let AI explain it.
        </p>

        <div className="grid gap-6">

          {portfolio.certifications.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="text-left p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {cert.name}
              </h3>
            </button>
          ))}

        </div>

        {selectedCert && (
          <AiExplainer
            title={selectedCert.name}
            explanation={selectedCert.explanation}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
}