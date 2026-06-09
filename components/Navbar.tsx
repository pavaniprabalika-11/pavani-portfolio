export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/90 border-b border-cyan-500/20 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-cyan-400 font-bold text-xl">
          PAVANI.EXE
        </h1>

        <div className="flex gap-6 text-gray-300">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#certifications" className="hover:text-cyan-400 transition">
            Certifications
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
        
          </a>

        </div>

      </div>
    </nav>
  );
}