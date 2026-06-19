import { useEffect, useState } from "react";
import NavBar from "./components/layouts/NavBar";
import StackTech from "./components/sections/StackTech";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Expand from "./components/sections/Expand";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeDetails, setActiveDetails] = useState<{
    type: "project" | "experience";
    id: number;
  } | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      <NavBar />

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Frontend Developer · Kathmandu, Nepal
          </span>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Frontend developer who cares about craft, clarity, and getting
            things right.
          </h2>

          <p className="text-lg text-muted mb-8">
            I build web interfaces with React and SvelteKit - Focused on clean
            code, good UX, and shipping things that actually work. Currently
            finishing my BIM degree at Tribhuvan University and open to new
            opportunities.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3
              rounded-xl hover:bg-primary/90 transition-colors duration-200 flex
              items-center justify-center font-medium"
            >
              View Projects
            </a>
            <a
              className="border border-border px-6 py-3 rounded-xl hover:bg-muted/10 transition-colors duration-200 font-medium"
              href=""
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-28"
      >
        <StackTech />
      </section>

      <Projects onViewDetails={(type, id) => setActiveDetails({ type, id })} />

      <Experience
        onViewDetails={(type, id) => setActiveDetails({ type, id })}
      />

      <Certifications />

      <Contact />

      <Expand
        isOpen={activeDetails !== null}
        onClose={() => setActiveDetails(null)}
        type={activeDetails?.type ?? null}
        id={activeDetails?.id ?? null}
      />
    </div>
  );
}
