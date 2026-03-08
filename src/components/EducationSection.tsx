import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-8 card-shine glow-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 mb-4 text-[11px]">
              IIT Roorkee
            </Badge>
            <h3 className="text-xl font-bold mb-2">Indian Institute of Technology, Roorkee</h3>
            <p className="text-muted-foreground text-sm">
              B.Tech, ECE
            </p>
            <p className="text-sm font-semibold text-foreground mt-2">CGPA: 8.752</p>
            <p className="text-xs font-mono text-muted-foreground mt-2">Class of 2023</p>

            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="text-sm font-semibold mb-1">Class XII</h4>
              <p className="text-sm text-muted-foreground">Score: 96%</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EducationSection;
