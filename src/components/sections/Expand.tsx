import { useEffect, useState } from "react";
import {
  EXPERIENCE_DATA,
  PROJECTS,
  type JobRole,
  type Project,
} from "../../data/portfolioData";

interface ExpandModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "project" | "experience" | null;
  id: number | null;
}

export default function Expand({
  isOpen,
  onClose,
  type,
  id,
}: ExpandModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeItem, setActiveItem] = useState<{
    type: "project" | "experience";
    id: number;
  } | null>(null);

  useEffect(() => {
    if (isOpen && type && id !== null) {
      setActiveItem({ type, id });
      setShouldRender(true);
      const timer = setTimeout(() => setIsAnimated(true), 30);
      return () => clearTimeout(timer);
    } else if (!isOpen) {
      setIsAnimated(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setActiveItem(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, type, id]);

  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  if (!shouldRender || !activeItem) return null;

  const data =
    activeItem.type === "project"
      ? PROJECTS.find((p) => p.id === activeItem.id)
      : EXPERIENCE_DATA.find((e) => e.id === activeItem.id);

  if (!data) return null;

  const isProject = activeItem.type === "project";
  const duration = !isProject ? (data as JobRole).duration : undefined;
  const techStack = isProject
    ? (data as Project).tags
    : (data as JobRole).skills;

  return (
    <div className="fixed inset-0 z-100 flex  items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isAnimated ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-[70%] bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto custom-scrollbar transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isAnimated
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-50 opacity-0 translate-y-12"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-text cursor-pointer p-1.5 rounded-lg hover:bg-muted/10 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              {type === "project"
                ? "Featured Project"
                : "Professional Experience"}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-text mt-1">
              {data.title}
            </h3>
            {isProject && (
              <div className="flex flex-wrap items-center gap-4 mt-1.5">
                {(data as Project).deployedLink && (
                  <a
                    href={(data as Project).deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Visit Live Site
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
                  </a>
                )}
                <a
                  href={(data as Project).githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  {(data as Project).githubUrlSecond ? "Frontend" : "GitHub"}
                </a>
                {(data as Project).githubUrlSecond && (
                  <a
                    href={(data as Project).githubUrlSecond}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                    Backend
                  </a>
                )}
              </div>
            )}
            <p className="text-muted text-sm font-medium mt-1">
              {data.subtitle}
            </p>
            {duration && (
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mt-3">
                {duration}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-text uppercase tracking-wider">
              Overview
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              {data.overview}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-text uppercase tracking-wider">
              {type === "project"
                ? "Key Features & Deliverables"
                : "Key Contributions"}
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-muted text-sm leading-relaxed marker:text-primary">
              {data.keyContributions.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {techStack && (
            <div className="space-y-2 pt-4 border-t border-border/50">
              <h4 className="text-xs font-bold text-text uppercase tracking-wider">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-muted/10 text-muted px-2.5 py-1 rounded-md border border-muted/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
