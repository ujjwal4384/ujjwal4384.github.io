import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Node.js", "TypeScript", "Next.js", "Python", "FastAPI", "JavaScript (ES6+)"],
  },
  {
    title: "Technologies",
    skills: [
      "AWS S3", "AWS Glue", "AWS CloudFront", "AWS Lambda",
      "Redis", "Kafka", "Git", "PostgreSQL", "MongoDB",
      "GraphQL", "SQL", "MySQL",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground mb-16 max-w-lg">
            Core technologies I use to build robust, scalable backend systems.
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.1}>
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-border bg-card text-secondary-foreground hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
