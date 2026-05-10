import { ContactForm } from "./ContactForm";

export const Contact = () => {
    
   const socials = [
    { name: "GitHub", href: "https://github.com/Mridulians" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mridulgupta21/" },
    { name: "Instagram", href: "https://www.instagram.com/emptiholic21/" },
  ];

  return (
    <section id="contact" className="relative py-32">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden glass p-10 md:p-20 text-center">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px] animate-glow-pulse" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono tracking-widest text-primary">
              <span className="w-8 h-px bg-primary" />
              CONTACT
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Let's build something
              <br />
              <span className="text-gradient glow-text">impactful.</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Have a product to ship, a store to scale, or an idea you want
              engineered properly? I'd love to hear about it.
            </p>

            <ContactForm />

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} — Crafted with intent.</div>
          <div className="font-mono text-xs">v1.0 · Always shipping</div>
        </footer>
      </div>
    </section>
  );
};
