import { SectionHeader } from "./SectionHeader";

export const ValueProp = () => {
  return (
    <section id="value" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <SectionHeader
          eyebrow="What I do"
          title={
            <>
              I don't just build websites.
              <br />
              <span className="text-gradient">I build solutions.</span>
            </>
          }
          description="From storefronts to systems — I deliver web products that solve real business problems and scale with them."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              tag: "01",
              title: "Shopify Stores",
              desc: "High-converting storefronts with custom theme work, app integrations, and Liquid that doesn't fight you.",
            },
            {
              tag: "02",
              title: "WordPress Websites",
              desc: "Custom themes, ACF-powered editorial flows, headless setups — fast, secure, and easy to manage.",
            },
            {
              tag: "03",
              title: "Custom Web Apps",
              desc: "Full-stack MERN applications: React + Node + MongoDB + Express, built for real product workloads.",
            },
          ].map((item, i) => (
            <div
              key={item.tag}
              className="glass rounded-3xl p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-mono text-xs text-primary mb-6">{item.tag}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured case */}
        <div className="mt-16 relative rounded-3xl overflow-hidden glass p-8 md:p-12">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                FEATURED CASE
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Bulk Price Updater for a{" "}
                <span className="text-gradient">Shopify Jewellery Store</span>
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Built a custom system that updates thousands of product prices
                instantly based on live gold rates — replacing days of manual
                spreadsheet work with a one-click operation. Saved the team
                ~15 hours per week and eliminated pricing errors entirely.
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {[
                { v: "10k+", l: "Products synced" },
                { v: "<3s", l: "Update time" },
                { v: "15h", l: "Weekly saved" },
                { v: "0", l: "Pricing errors" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-background/40 p-5 text-center"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
