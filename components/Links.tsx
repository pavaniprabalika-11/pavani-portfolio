export default function Links() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Let's Connect
        </h2>

        <p className="text-gray-400 mb-10">
          Open to internships, full-time opportunities and exciting projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/pavaniprabalika-11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
          >
            <h3 className="text-2xl font-bold">
              💻 GitHub
            </h3>

            <p className="text-gray-400 mt-2">
              Explore my projects, repositories and technical work.
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pavani-prabalika-mandla-017b4426b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
          >
            <h3 className="text-2xl font-bold">
              💼 LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect with me professionally and follow my journey.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:teddypavani64@gmail.com"
            className="p-6 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
          >
            <h3 className="text-2xl font-bold">
              📧 Email
            </h3>

            <p className="text-gray-400 mt-2 break-all">
              teddypavani64@gmail.com
            </p>
          </a>

          {/* Location */}
          <div className="p-6 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition">
            <h3 className="text-2xl font-bold">
              📍 Location
            </h3>

            <p className="text-gray-400 mt-2">
              Andhra Pradesh, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}