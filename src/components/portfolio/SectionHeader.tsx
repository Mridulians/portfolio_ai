export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) => (
  <div className="max-w-3xl mb-16">
    <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-primary">
      <span className="w-8 h-px bg-primary" />
      {eyebrow.toUpperCase()}
    </div>
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {description}
      </p>
    )}
  </div>
);
