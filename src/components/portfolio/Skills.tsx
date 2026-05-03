import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "HTML", icon: "<>" },
  { name: "CSS", icon: "{}" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "Node.js", icon: "⬢" },
  { name: "Express", icon: "E" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "≋" },
  { name: "Git", icon: "⎇" },
  { name: "GitHub", icon: "○" },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Tech stack"
          title={<>The tools I <span className="text-gradient">build with.</span></>}
          description="A focused stack chosen for performance, productivity and long-term maintainability."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group relative aspect-square rounded-2xl glass flex flex-col items-center justify-center gap-3 hover-lift cursor-default animate-fade-in"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              <div className="relative w-12 h-12 rounded-xl bg-secondary border border-border grid place-items-center font-mono text-lg font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
