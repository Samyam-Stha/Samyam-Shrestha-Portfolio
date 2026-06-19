import { useState, useEffect } from "react";
import { PROJECTS } from "../../data/portfolioData";

interface ProjectsProps {
  onViewDetails: (type: "project" | "experience", id: number) => void;
}

export default function Projects({ onViewDetails }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = PROJECTS.length - visibleSlides;
    if (currentIndex > maxIndex) {
      const nextIndex = Math.max(0, maxIndex);
      window.requestAnimationFrame(() => {
        setCurrentIndex(nextIndex);
      });
    }
  }, [visibleSlides, currentIndex]);

  const nextSlide = () => {
    const maxIndex = PROJECTS.length - visibleSlides;
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    const maxIndex = PROJECTS.length - visibleSlides;
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  const maxIndex = PROJECTS.length - visibleSlides;

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-28 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            My Work
          </span>
          <h3 className="text-4xl font-extrabold text-text">
            Featured Projects
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-xl bg-card border border-border text-text hover:border-primary/50 hover:text-primary hover:shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-xl bg-card border border-border text-text hover:border-primary/50 hover:text-primary hover:shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-full -mx-4 px-4 py-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_rgba(79,70,229,0.3)] transition-all duration-300 flex flex-col h-full">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2 justify-between">
                    <h4 className="text-xl font-bold group-hover:text-heading-text transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.deployedLink && (
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-3"
                        aria-label="Visit live site"
                      >
                        Visit
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow min-h-[60px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted/10 text-muted px-2.5 py-1 rounded-md border border-muted/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.githubUrlSecond ? "Frontend" : "GitHub"}
                    </a>
                    {project.githubUrlSecond && (
                      <a
                        href={project.githubUrlSecond}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors duration-200"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Backend
                      </a>
                    )}
                    <button
                      onClick={() => onViewDetails("project", project.id)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline ml-auto cursor-pointer"
                    >
                      View Details
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-muted/30 hover:bg-muted/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
