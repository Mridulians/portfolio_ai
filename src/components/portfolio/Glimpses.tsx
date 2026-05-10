import { SectionHeader } from "./SectionHeader";
import jewellery from "@/assets/project-jewellery.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import cms from "@/assets/project-cms.jpg";
import pos from "@/assets/project-pos.jpg";
import booking from "@/assets/project-booking.jpg";

const glimpses = [
  {
    title: "Hotilal Jewellers — Jewellery Commerce",
    tag: "Shopify",
    image: jewellery,
    href: "https://hotilaljewellers.com/",
  },
  {
    title: "Pulse Analytics Dashboard",
    tag: "MERN",
    image: dashboard,
    href: "https://example.com/pulse",
  },
  {
    title: "Loom CMS",
    tag: "Headless WP",
    image: cms,
    href: "https://example.com/loom",
  },
  {
    title: "Cartline POS",
    tag: "Web App",
    image: pos,
    href: "https://example.com/cartline",
  },
  {
    title: "Northwind Booking",
    tag: "Next.js",
    image: booking,
    href: "https://example.com/northwind",
  },
];

export const Glimpses = () => {
  return (
    <section id="glimpses" className="relative py-32">
      <div className="container">
        <SectionHeader
          eyebrow="A glimpse"
          title={
            <>
              Live work,
              <br />
              <span className="text-gradient">in the wild.</span>
            </>
          }
          description="A visual look at recent builds — each one live in production. Hover to peek, click to visit."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[260px]">
          {glimpses.map((g, i) => {
            // Bento layout: first one wide-tall, then varied
            const span =
              i === 0
                ? "lg:col-span-4 lg:row-span-2"
                : i === 1
                ? "lg:col-span-2"
                : i === 2
                ? "lg:col-span-2"
                : i === 3
                ? "lg:col-span-3"
                : "lg:col-span-3";

            return (
              <a
                key={g.title}
                href={g.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-3xl glass hover-lift animate-fade-in ${span}`}
                style={{ animationDelay: `${i * 0.08}s` }}
                aria-label={`Visit ${g.title} live site`}
              >
                {/* Image */}
                <img
                  src={g.image}
                  alt={`${g.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Glow on hover */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-primary/40 transition-all duration-500 rounded-3xl" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-md border border-border text-muted-foreground">
                      {g.tag.toUpperCase()}
                    </span>
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-[-45deg] group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)]">
                      →
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">
                      {g.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                      VISIT LIVE SITE
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
