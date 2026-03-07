import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, Github, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 card-shine glow-border text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Open to backend engineering opportunities and interesting collaborations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <a
                href="mailto:ujjwalchitransh18@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                ujjwalchitransh18@gmail.com
              </a>
              <span className="hidden sm:block w-px h-5 bg-border" />
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} />
                Bangalore, India
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/ujjwal4384", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-chitransh/", label: "LinkedIn" },
                { icon: Code2, href: "https://leetcode.com/u/ujjwal-chitransh/", label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-border hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Ujjwal Chitransh. Built with React & Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
