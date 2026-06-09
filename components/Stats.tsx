export default function Stats() {
  const stats = [
    { value: "7.86", label: "CGPA" },
    { value: "5+", label: "Certifications" },
    { value: "4", label: "Major Projects" },
    { value: "2", label: "Internships" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-cyan-500/20 text-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition"
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}