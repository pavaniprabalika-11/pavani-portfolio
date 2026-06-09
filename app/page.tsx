import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import WhyHireMe from "@/components/WhyHireMe";
import AskPavani from "@/components/AskPavani";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-20">

        <section id="about">
          <Hero />
          <About />
        </section>

        <Stats />

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="whyhireme">
          <WhyHireMe />
        </section>

        <section id="askpavani">
          <AskPavani />
        </section>

        <section id="contact">
          <Links />
        </section>

        <Footer />

      </main>
    </>
  );
}