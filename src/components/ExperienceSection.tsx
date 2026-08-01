import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import amazonLogo from "@/assets/amazon_logo.jpeg";
import refyneLogo from "@/assets/refyne_logo.jpeg";
import rigiLogo from "@/assets/rigi_logo.jpeg";
import scalenutLogo from "@/assets/scalenut_logo.jpeg";

interface Experience {
  company: string;
  role: string;
  period: string;
  tag?: string;
  logo?: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "SDE-2",
    period: "July 2026 — Present",
    tag: "Agentic AI",
    logo: amazonLogo,
    bullets: [],
  },
  {
    company: "Refyne India",
    role: "SDE-2",
    period: "April 2025 — Present",
    tag: "FinTech · LinkedIn Top Startups",
    logo: refyneLogo,
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
    logo: rigiLogo,
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
    logo: scalenutLogo,
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
          <div className="absolute left-[22px] top-2 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company + exp.role} delay={i * 0.1}>
                <div className="relative sm:pl-14 group">
                  <div className="hidden sm:flex absolute left-0 top-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center text-primary shadow-lg overflow-hidden">
                    <Briefcase size={18} />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 card-shine glow-border hover:border-primary/25 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-2 border border-border shadow-sm overflow-hidden shrink-0">
                        {exp.logo ? (
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                        ) : (
                          <Briefcase size={24} className="text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          {exp.tag && (
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 text-[11px]">
                              {exp.tag}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium mt-0.5">{exp.role}</p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap hidden sm:block pt-1">{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:hidden">
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    {exp.bullets.length > 0 && (
                      <ul className="mt-5 pt-5 border-t border-border/60 space-y-3">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
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
