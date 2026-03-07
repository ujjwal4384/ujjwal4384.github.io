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
    tag: "FinTech · LinkedIn Top Startup",
    bullets: [
      "Spearheaded payout integrations and orchestrations using Razorpay, Easebuzz, and Cashfree to power all transactions.",
      "Architected and built the core lending underwriting platform utilizing decision tree data structures for risk tier determination and pricing.",
      "Developed a transformer pipeline for business rules math logic to determine final eligible loan terms based on credit bureau history, defaulting probability, and other features.",
      "Built infrastructure integrating Account Aggregators (Finarkein, Setu) and Experian for credit reports, adhering to RBI guidelines using microservices.",
    ],
  },
  {
    company: "Rigi",
    role: "Software Development Engineer",
    period: "April 2024 — April 2025",
    bullets: [
      "Developed the backend for Gameshow, contributing to the app reaching 1M DAU within 40 days of launch.",
      "Created Sanket, an in-house notification service delivering alert webhooks.",
      "Developed the backend of a reward-system ledger which increased user engagement by 14%.",
    ],
  },
  {
    company: "Scalenut",
    role: "Software Development Engineer",
    period: "June 2023 — April 2024",
    bullets: [
      "Designed and developed the backend of the Traffic Analyser module, managing data for more than 5k domains.",
      "Engineered the Webtune AI's system architecture to improve domains' SEO scores by publishing real-time updates.",
      "Recognized as Star Performer of the Month for September 2023.",
    ],
  },
];

const internships = [
  { company: "Scalenut", role: "SDE Intern", period: "April 2023 — June 2023" },
  { company: "Twilio", role: "SDE Intern", period: "May 2022 — July 2022", tag: "Fortune 500" },
  { company: "Pibit.ai", role: "SDE Intern", period: "Dec 2020 — Jan 2021" },
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

        {/* Internships */}
        <AnimatedSection delay={0.2} className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-muted-foreground">Internships</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {internships.map((intern) => (
              <div
                key={intern.company}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm">{intern.company}</h4>
                  {intern.tag && (
                    <Badge variant="outline" className="text-[10px] border-highlight/30 text-highlight">
                      {intern.tag}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{intern.role}</p>
                <p className="text-xs font-mono text-muted-foreground mt-2">{intern.period}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
