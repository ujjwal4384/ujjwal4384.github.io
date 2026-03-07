import AnimatedSection from "./AnimatedSection";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "NPTEL — Computer Networks and Internet Protocol",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS19S2412042002221604",
  },
  {
    title: "Agentic AI MCP",
    link: "https://www.educative.io/verify-certificate/vgA3wPF4qlVm7YL0mF8p4yR5287gsl",
  },
  {
    title: "Agile at Work: Getting Better with Agile Retrospectives",
    link: "https://www.linkedin.com/learning/certificates/03731afe50a8bfb1371c505d14514bd1b0e4056695bb66af0f3e95ac8a1f2ba4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2BaW7Cw8VSo2kS5HTZc7H%2FQ%3D%3D",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Licenses & Certifications</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Professional certifications and continuous learning.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.08}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="text-primary" size={18} />
                  </div>
                  <span className="text-sm font-medium text-secondary-foreground group-hover:text-foreground transition-colors">
                    {cert.title}
                  </span>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
