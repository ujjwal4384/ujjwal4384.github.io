import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import twilioLogo from "@/assets/twilio_logo.jpeg";
import scalenutLogo from "@/assets/scalenut_logo.jpeg";
import pibitaiLogo from "@/assets/pibitai_logo.jpeg";

interface Internship {
  company: string;
  role: string;
  period: string;
  tag?: string;
  logo?: string;
  details: string[];
}

const internships: Internship[] = [
  {
    company: "Twilio",
    role: "Software Development Engineer Intern",
    period: "May 2022 — July 2022",
    tag: "Fortune 500",
    logo: twilioLogo,
    details: [
      "Executed POC on AWS Glue & used Docker image to run all 3 steps of ETL jobs in AWS Glue environment.",
      "Performed real-time stateful streaming of data to implement conversation hold-time calculator metric in Python.",
    ],
  },
  {
    company: "Scalenut",
    role: "Software Development Engineer Intern",
    period: "April 2023 — June 2023",
    logo: scalenutLogo,
    details: [
      "Built in-house crawler and backend of 3 SEO optimization tools.",
      "Performed web-scraping & integrated Google Lighthouse to automate web page quality measurement.",
    ],
  },
  {
    company: "Pibit.ai",
    role: "Software Development Engineer Intern",
    period: "Dec 2020 — Jan 2021",
    logo: pibitaiLogo,
    details: [
      "Revamped the front-end (UI) of the official website of Pibit.ai in React.JS.",
      "Facilitated image analysis by adding features like zooming and custom pagination, resulting in a 30% reduction in TAT.",
    ],
  },
];

const InternshipsSection = () => {
  const [selected, setSelected] = useState<Internship | null>(null);

  return (
    <section id="internships" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Internships</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Early career experiences that shaped my engineering foundation. Click to see details.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {internships.map((intern, i) => (
            <AnimatedSection key={intern.company} delay={i * 0.1}>
              <button
                onClick={() => setSelected(intern)}
                className="w-full text-left rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
              >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {intern.logo && (
                        <div className="w-7 h-7 rounded-md bg-card border border-border p-0.5 overflow-hidden shrink-0">
                          <img src={intern.logo} alt={`${intern.company} logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <h4 className="font-semibold">{intern.company}</h4>
                    {intern.tag && (
                      <Badge variant="outline" className="text-[10px] border-highlight/30 text-highlight">
                        {intern.tag}
                      </Badge>
                    )}
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{intern.role}</p>
                <p className="text-xs font-mono text-muted-foreground mt-2">{intern.period}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="bg-card border-border max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    {selected.logo && (
                      <div className="w-10 h-10 rounded-lg bg-card border border-border p-1 overflow-hidden shrink-0">
                        <img src={selected.logo} alt={`${selected.company} logo`} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <DialogTitle className="text-xl">{selected.company}</DialogTitle>
                      <p className="text-sm text-muted-foreground">{selected.role} · {selected.period}</p>
                    </div>
                  </div>
                </DialogHeader>
                <ul className="space-y-3 mt-4">
                  {selected.details.map((d, j) => (
                    <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default InternshipsSection;
