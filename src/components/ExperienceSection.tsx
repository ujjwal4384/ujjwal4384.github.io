import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  tag?: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Refyne India",
    role: "SDE-2",
    period: "April 2025 — Present",
    tag: "FinTech · LinkedIn Top Startups",
    bullets: [
      "Developed payout system supporting multi-vendor integration (Razorpay, Easebuzz, Cashfree), handling 10L+ daily transactions.",
      "Architected core lending underwriting infrastructure in 8 weeks, processing millions of requests per second using decision tree data structures.",
      "Developed transformer pipelines for dynamic business rules and loan term calculations.",
      "Designed and developed the Account Aggregator system from scratch using scalable microservices, ensuring strict adherence to RBI compliance for automated loan underwriting.",
    ],
  },
  {
    company: "Rigi",
    role: "Software Development Engineer",
    period: "April 2024 — March 2025",
    tag: "Creator Economy, Stock Advisory Platform",
    bullets: [
      "Developed the backend for Gameshow, contributing to the app reaching 1M DAU within 40 days of launch.",
      "Created Sanket, an in-house notification service delivering alert webhooks.",
      "Developed a reward-system ledger backend, increasing user engagement by 14%.",
    ],
  },
  {
    company: "Scalenut",
    role: "Software Development Engineer",
    period: "June 2023 — April 2024",
    tag: "AI SEO",
    bullets: [
      "Designed backend for Traffic Analyser module, managing data for 5k+ domains.",
      "Engineered Webtune AI's system architecture for real-time SEO updates.",
      "Star Performer of the Month (September 2023).",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground mb-16 max-w-lg">
            3+ years building backend systems at scale across FinTech, creator economy, and SaaS.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company + exp.role} delay={i * 0.1}>
                <div className="relative sm:pl-14">
                  <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-xl bg-card border border-border items-center justify-center text-primary">
                    <Briefcase size={18} />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 card-shine glow-border hover:border-primary/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {exp.tag && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 text-[11px]">
                            {exp.tag}
                          </Badge>
                        )}
                        <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
