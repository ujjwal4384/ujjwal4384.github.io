import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  "Secured Global Rank 158 among 11,007 participants in CodeChef Contest May LunchTime 2021.",
  "Secured 1st rank in the district and 3rd rank in the Bundelkhand region with 96% in class XII in 2018.",
  "Recipient of Nodal Baal Vigyani Award by National Children Science Congress Uttar Pradesh 2016.",
];

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
              <p className="text-sm font-semibold text-foreground mt-2">CGPA: 8.752</p>
              <p className="text-xs font-mono text-muted-foreground mt-2">Class of 2023</p>

              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-sm font-semibold mb-1">Class XII</h4>
                <p className="text-sm text-muted-foreground">Score: 96%</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full card-shine glow-border">
              <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                <Trophy className="text-highlight" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-5">Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-highlight/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
