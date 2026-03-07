import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">Education & Achievements</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card p-8 h-full card-shine glow-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 mb-4 text-[11px]">
                IIT Roorkee
              </Badge>
              <h3 className="text-xl font-bold mb-2">B.Tech in Electronics & Communication Engineering</h3>
              <p className="text-muted-foreground text-sm">
                Indian Institute of Technology, Roorkee
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-3">Class of 2023</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full card-shine glow-border">
              <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                <Trophy className="text-highlight" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <ul className="space-y-3">
                <li className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-highlight/60 shrink-0" />
                  Secured <span className="font-semibold text-foreground">Global Rank 158</span> among 11,007 participants in CodeChef May LunchTime 2021.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
