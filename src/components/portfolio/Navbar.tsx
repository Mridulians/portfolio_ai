import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "value", label: "Approach" },
  { id: "projects", label: "Projects" },
  { id: "glimpses", label: "Glimpses" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_8px_40px_hsl(0_0%_0%/0.5)]" : "bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/30">
              <span className="absolute inset-0 rounded-lg bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-display font-bold text-primary text-sm relative">D</span>
            </span>
            <span className="font-display font-semibold tracking-tight">dev<span className="text-primary">.</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20" />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Hire me
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
