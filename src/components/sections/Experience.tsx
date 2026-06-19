import { EXPERIENCE_DATA } from "../../data/portfolioData";

interface ExperienceProps {
  onViewDetails: (type: "project" | "experience", id: number) => void;
}

export default function Experience({ onViewDetails }: ExperienceProps) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-28">
      <div className="flex flex-col mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">My Journey</span>
        <h3 className="text-4xl font-extrabold text-text">Work Experience</h3>
      </div>

      <div className="relative border-l border-border pl-8 ml-4 space-y-12">
        {EXPERIENCE_DATA.map((job) => (
          <div key={job.id} className="relative group">
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-200" />

            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-text group-hover:text-heading-text transition-colors duration-300">
                    {job.title}
                  </h4>
                  <span className="text-primary font-medium">{job.company}</span>
                </div>
                <div className="text-right md:text-right text-sm">
                  <span className="bg-muted/10 text-muted px-3 py-1 rounded-full font-medium inline-block">
                    {job.duration}
                  </span>
                  <span className="text-muted block mt-1 text-xs">{job.location}</span>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2.5 text-muted text-sm leading-relaxed mb-6 marker:text-primary">
                {job.description.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-muted/10 text-muted px-2.5 py-1 rounded-md border border-muted/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onViewDetails("experience", job.id)}
                  className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline cursor-pointer"
                >
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
