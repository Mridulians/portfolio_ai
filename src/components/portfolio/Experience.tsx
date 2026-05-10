import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

// const experience = [
//   {
//     period: "2024 — Present",
//     role: "Freelance Software Developer",
//     company: "Independent",
//     summary:
//       "Partnering with founders and agencies to ship Shopify stores, custom MERN apps, and internal tools. Owning projects end-to-end: discovery, architecture, build, and handover.",
//     highlights: [
//       "Built a real-time bulk price updater for a Shopify jewellery store — 10k+ SKUs, ~15h/week saved",
//       "Shipped a MERN analytics dashboard cutting reporting time by 60%",
//       "Led headless WordPress + React rebuilds with sub-second TTFB",
//     ],
//     stack: ["React", "TypeScript", "Node.js", "Shopify", "MongoDB"],
//   },
//   {
//     period: "2022 — 2024",
//     role: "Full-Stack Web Developer",
//     company: "Web Agency",
//     summary:
//       "Delivered 25+ client projects across e-commerce, marketing sites, and custom dashboards. Owned frontend architecture and backend integrations on most builds.",
//     highlights: [
//       "Built reusable theme & component systems used across the agency's stack",
//       "Integrated Stripe, Klaviyo, and 3rd-party APIs into production stores",
//       "Mentored two junior developers on React patterns and clean Git workflow",
//     ],
//     stack: ["React", "Next.js", "WordPress", "Express", "Tailwind"],
//   },
//   {
//     period: "2021 — 2022",
//     role: "Junior Web Developer",
//     company: "Studio / Early career",
//     summary:
//       "Started in the trenches: WordPress themes, landing pages, and the first React apps. Built the foundations of a problem-solving mindset that still drives my work today.",
//     highlights: [
//       "Shipped 15+ responsive marketing sites with Lighthouse scores 90+",
//       "Migrated legacy jQuery codebases to modern React components",
//       "Built first internal tooling that automated repetitive client work",
//     ],
//     stack: ["JavaScript", "React", "WordPress", "PHP", "CSS"],
//   },
// ];


const experience = [
  {
    period: "July 2025 — Present",
    role: "Software Developer",
    company: "Top MNC",
    summary:
      "Working as a React developer on a GIS-based enterprise application. Focused on building scalable frontend systems, handling complex data visualizations, and integrating APIs in a production-grade environment.",
    highlights: [
      "Developing and optimizing React-based interfaces for GIS workflows",
      "Handling large datasets and improving rendering performance",
      "Collaborating with cross-functional teams in an enterprise setup",
    ],
    stack: ["React", "Node.js", "MERN", "Python"],
  },
  {
    period: "June 2024 — July 2025",
    role: "Website Developer (Team Lead)",
    company: "DigiPerform",
    summary:
      "Led a team of 4 developers to deliver client-focused web solutions across Shopify, WordPress, and custom MERN applications. Acted as the primary bridge between clients and the development team.",
    highlights: [
      "Managed end-to-end project delivery from requirement gathering to deployment",
      "Led a team of 4 developers, ensuring code quality and timely delivery",
      "Built and deployed multiple Shopify and WordPress solutions for clients",
      "Designed custom MERN-based solutions tailored to business needs",
    ],
    stack: ["React", "Node.js", "MERN", "WordPress", "Shopify"],
  },
  {
    period: "June 2023 — March 2024",
    role: "Software Developer",
    company: "Crypto Venture",
    summary:
      "Built a crypto-focused web platform from scratch and scaled it with a team of 10 interns. Took ownership of architecture, development, and team coordination.",
    highlights: [
      "Led a team of 10 interns and managed task distribution",
      "Developed the application from scratch using MERN stack",
      "Designed backend architecture and database schema",
      "Scaled the platform to handle growing user interactions",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS"],
  },
];

export const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.15;
      const total = rect.height + (start - end);
      const scrolled = start - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              3+ years.
              <br />
              <span className="text-gradient">Real products shipped.</span>
            </>
          }
          description="A timeline of the work that shaped how I build today — from first lines of PHP to architecting full-stack platforms."
        />

        <ol ref={listRef} className="relative">
          {/* Vertical track */}
          <span
            aria-hidden
            className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-border/60 md:-translate-x-1/2"
          />
          {/* Animated progress line */}
          <span
            aria-hidden
            className="absolute left-[11px] md:left-1/2 top-2 w-px md:-translate-x-1/2 bg-gradient-to-b from-primary via-primary/70 to-primary/0 shadow-[0_0_12px_hsl(var(--primary))] transition-[height] duration-150 ease-out"
            style={{ height: `calc((100% - 1rem) * ${progress})` }}
          />

          {experience.map((item, i) => {
            const isRight = i % 2 === 1;
            return (
              <li
                key={item.period}
                className={`relative grid md:grid-cols-2 gap-x-12 gap-y-4 pl-10 md:pl-0 pb-14 last:pb-0 animate-fade-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <span
                  aria-hidden
                  className="absolute left-0 md:left-1/2 top-2 w-6 h-6 md:-translate-x-1/2 grid place-items-center"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
                  <span className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
                </span>

                {/* Period */}
                <div
                  className={`md:text-right ${isRight ? "md:order-2 md:text-left md:pl-12" : "md:pr-12"}`}
                >
                  <div className="font-mono text-xs tracking-widest text-primary mb-1">
                    {item.period}
                  </div>
                  <div className="font-display text-xl font-semibold">{item.role}</div>
                  <div className="text-sm text-muted-foreground">{item.company}</div>
                </div>

                {/* Card */}
                <div
                  className={`glass rounded-2xl p-6 hover-lift ${
                    isRight ? "md:order-1 md:pr-12" : "md:pl-12"
                  }`}
                >
                  <p className="text-foreground/90 leading-relaxed">{item.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};