export default function WhyHireMe() {
  const strengths = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      desc: "Built practical AI solutions using Computer Vision, OCR and Deep Learning.",
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      desc: "Experience with YOLOv8, OpenCV and image processing projects.",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      desc: "Skilled in Pandas, Power BI and extracting insights from data.",
    },
    {
      icon: "🌐",
      title: "Full Stack Development",
      desc: "Built web applications using Flask, MongoDB, Next.js and TypeScript.",
    },
    {
      icon: "🚀",
      title: "Fast Learner",
      desc: "Quickly adapts to new technologies and development environments.",
    },
    {
      icon: "🧩",
      title: "Problem Solver",
      desc: "Passionate about solving real-world challenges through technology.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Why Hire Me?
        </h2>

        <p className="text-gray-400 mb-12">
          What I bring to your team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}