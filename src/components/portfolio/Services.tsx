import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "Shopify Development",
    points: [
      "Custom theme design & build",
      "App integrations & Liquid expertise",
      "Performance & conversion tuning",
      "Custom backend automations",
    ],
  },
  {
    title: "WordPress Development",
    points: [
      "Custom themes from scratch",
      "ACF-powered editorial flows",
      "Headless WordPress + React",
      "Speed, security & SEO",
    ],
  },
  {
    title: "Custom Web Development",
    points: [
      "Full-stack MERN applications",
      "REST & GraphQL APIs",
      "Dashboards & admin tools",
      "Stripe & 3rd-party integrations",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title={<>What I <span className="text-gradient">offer.</span></>}
          description="Three focused service lines — each backed by years of shipping real products."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl glass p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <h3 className="font-display text-2xl font-semibold mb-6">{s.title}</h3>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
