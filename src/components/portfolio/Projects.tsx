import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Hotilal Jewellers — Jewellery Commerce",
    desc: "Custom Shopify theme with a real-time bulk price updater pegged to live gold, silver and diamond rates. Powers thousands of SKUs daily.",
    stack: ["Shopify", "Liquid", "Node.js", "API"],
    impact: "10k+ products auto-synced",
  },
  {
    title: "Pulse Analytics Dashboard",
    desc: "Internal MERN dashboard for marketing ops with live charts, role-based access and exportable reports.",
    stack: ["React", "Node.js", "MongoDB", "TS"],
    impact: "60% faster reporting",
  },
  {
    title: "Loom CMS",
    desc: "Headless WordPress + React frontend for a publication. ACF-driven content model, sub-second TTFB.",
    stack: ["WordPress", "React", "GraphQL"],
    impact: "98 Lighthouse score",
  },
  {
    title: "Cartline POS",
    desc: "Lightweight point-of-sale web app for small retailers with offline-first sync and inventory tracking.",
    stack: ["React", "Express", "MongoDB"],
    impact: "Used in 12 stores",
  },
  {
    title: "Northwind Booking",
    desc: "Custom appointment booking platform with Stripe payments and automated reminders.",
    stack: ["Next.js", "Stripe", "Node.js"],
    impact: "$200k+ processed",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Projects that <span className="text-gradient">shipped.</span></>}
          description="A selection of recent builds across e-commerce, dashboards and custom platforms."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-3xl glass p-8 hover-lift overflow-hidden ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono">
                    {p.impact}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
