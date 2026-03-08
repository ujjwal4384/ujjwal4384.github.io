import AnimatedSection from "./AnimatedSection";
import { Trophy } from "lucide-react";

const achievements = [
  "Secured Global Rank 158 among 11,007 participants in CodeChef Contest May LunchTime 2021.",
  "Secured 1st rank in the district and 3rd rank in the Bundelkhand region with 96% in class XII in 2018.",
  "Recipient of Nodal Baal Vigyani Award by National Children Science Congress Uttar Pradesh 2016.",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Achievements</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-8 card-shine glow-border">
            <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
              <Trophy className="text-highlight" size={24} />
            </div>
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
    </section>
  );
};

export default AchievementsSection;
