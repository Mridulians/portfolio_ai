export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-glow/15 blur-[100px] animate-float" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs font-mono tracking-wider text-muted-foreground animate-fade-in"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Software Developer
            <br />
            <span className="text-gradient glow-text">Building Scalable</span>
            <br />
            Web Solutions
          </h1>

          <p
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            3+ years crafting Shopify stores, WordPress sites, and custom MERN
            applications. I turn complex problems into clean, performant
            products that businesses actually rely on.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">View Projects</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass font-medium hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              { v: "3+", l: "Years experience" },
              { v: "40+", l: "Projects shipped" },
              { v: "100%", l: "Client retention" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground text-xs font-mono animate-fade-in-slow">
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
