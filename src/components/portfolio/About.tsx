import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="About"
              title={
                <>
                  Engineer first,
                  <br />
                  <span className="text-gradient">developer always.</span>
                </>
              }
            />
          </div>

          <div className="lg:col-span-7 lg:pt-20">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
              I'm a software developer with{" "}
              <span className="text-primary font-medium">3+ years of hands-on experience</span>{" "}
              shipping production-grade web products. From e-commerce platforms to
              custom dashboards, I focus on what actually moves the needle:
              performance, clarity, and code that scales.
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              My edge is problem-solving. I treat every project like a system to
              understand — not a template to copy. Whether it's a Shopify store
              choking on bulk operations or a React app drowning in re-renders,
              I find the root cause and engineer it away.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { t: "Problem Solver", d: "Root-cause first" },
                { t: "Pragmatic", d: "Ship what works" },
                { t: "Detail-driven", d: "Pixel & perf perfect" },
              ].map((item) => (
                <div
                  key={item.t}
                  className="glass rounded-2xl p-5 hover-lift"
                >
                  <div className="font-display font-semibold">{item.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
