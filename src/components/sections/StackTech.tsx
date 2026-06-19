const stackCategories = [
  {
    id: "01",
    title: "LANGUAGES",
    technologies: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    id: "02",
    title: "FRAMEWORKS & LIBRARIES",
    technologies: [
      "React JS",
      "Svelte/SvelteKit",
      "Tailwind CSS",
      "Node.js/Express.js",
      "Django",
    ],
  },
  {
    id: "03",
    title: "DATABASES",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "04",
    title: "Collaboration",
    technologies: ["Slack", "ClickUp", "Pilot"],
  },
];

export default function StackTech() {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-3xl font-bold mb-8">Technological Stack</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stackCategories.map((category) => (
          <div
            key={category.id}
            className="border border-border rounded-2xl p-8 hover:border-white hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-heading-text"
          >
            <p className="text-heading-text font-extrabold mb-6 text-xl">
              {category.id}. {category.title}
            </p>

            <ul className="pl-5 list-disc space-y-3 marker:text-heading-text">
              {category.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
