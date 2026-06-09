import Image from "next/image";

interface Props {
  isSpeaking: boolean;
}

export default function PavaniAIAvatar({ isSpeaking }: Props) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative transition-all duration-300 ${
          isSpeaking
            ? "scale-105 drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]"
            : ""
        }`}
      >
        <Image
          src="/avatar/prabalika-ai.png"
          alt="Pavani AI"
          width={420}
          height={420}
          className="rounded-3xl"
        />

        {/* Speaking Indicator */}
        {isSpeaking && (
          <div className="absolute bottom-4 right-4 flex gap-1">
            <span className="w-2 h-6 bg-cyan-400 animate-pulse"></span>
            <span className="w-2 h-8 bg-cyan-400 animate-pulse"></span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}