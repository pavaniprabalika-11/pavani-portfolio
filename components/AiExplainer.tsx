"use client";

interface AiExplainerProps {
  title: string;
  explanation: string;
  onClose: () => void;
}

const speak = (text: string) => {
  const speech = new SpeechSynthesisUtterance(text);

  speech.rate = 1;
  speech.pitch = 1.1;
  speech.volume = 1;
  speech.lang = "en-US";

  const voices = window.speechSynthesis.getVoices();

  const femaleVoice =
    voices.find((v) => v.name.includes("Microsoft Zira")) ||
    voices.find((v) => v.name.includes("Samantha")) ||
    voices.find((v) => v.name.toLowerCase().includes("female")) ||
    voices[0];

  speech.voice = femaleVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};

export default function AiExplainer({
  title,
  explanation,
  onClose,
}: AiExplainerProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-zinc-900 border border-cyan-500/20 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)]">

        {/* Header */}
        <div className="sticky top-0 bg-zinc-900 border-b border-cyan-500/20 px-8 py-6">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                🤖 AI Explains
              </h2>

              <p className="text-gray-400">
                Interactive Portfolio Guide
              </p>
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => speak(explanation)}
                className="px-5 py-3 bg-cyan-400 text-black rounded-xl font-bold hover:scale-105 transition"
              >
                🔊 Listen
              </button>

              <button
                onClick={() => window.speechSynthesis.cancel()}
                className="px-5 py-3 bg-yellow-500 text-black rounded-xl font-bold hover:scale-105 transition"
              >
                ⏹ Stop
              </button>

              <button
                onClick={() => {
                  window.speechSynthesis.cancel();
                  onClose();
                }}
                className="px-5 py-3 bg-red-500 text-white rounded-xl font-bold hover:scale-105 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[65vh] px-8 py-6">

          <h3 className="text-3xl font-bold text-white mb-6">
            {title}
          </h3>

          <div className="text-gray-300 whitespace-pre-line leading-relaxed text-lg">
            {explanation}
          </div>

        </div>

      </div>

    </div>
  );
}