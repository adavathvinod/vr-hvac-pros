interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-3">{title}</h2>
    <div className={`w-16 h-1 bg-accent rounded-full mb-4 ${centered ? "mx-auto" : ""}`} />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
