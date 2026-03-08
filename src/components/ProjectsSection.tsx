import AnimatedSection from "./AnimatedSection";
import { Github, Bot, Brain, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SMP Dashboard",
    description: "Student Mentorship Programme dashboard — a full-stack platform facilitating structured mentorship workflows.",
    tags: ["Full-Stack", "Dashboard"],
    icon: Github,
    link: "https://github.com/Student-Mentorship-Programme",
  },
  {
    title: "Agentic AI: Weather Assistant",
    description: "A backend AI agent leveraging the Model Context Protocol (MCP) to orchestrate weather data retrieval and intelligent responses via agentic workflows.",
    tags: ["Agentic AI", "MCP", "Python"],
    icon: Bot,
    link: "https://github.com/ujjwal4384/mcp-weather-assistant",
  },
  {
    title: "Deep Learning Assisted Self-Interference Suppression",
    description: "Mitigated self-interference in Full-Duplex systems using deep learning based TID method (Time-Invariant non-linear Distortion). IIT Roorkee, Jan–May 2022.",
    tags: ["Python", "TensorFlow", "DNN", "MATLAB"],
    icon: Brain,
    link: null,
  },
  {
    title: "Client-Server Communication via TCP/IP",
    description: "Used socket programming for network relay among server and clients with controllable intake capacity. Implemented synchronized exchange using multi-threading. IIT Roorkee, Dec 2020–Jan 2021.",
    tags: ["Networking", "Multi-threading", "TCP/IP"],
    icon: Network,
    link: "https://github.com/ujjwal4384/NetworkingProject",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Selected projects showcasing problem-solving and system design.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 card-shine glow-border hover:border-primary/20 transition-colors duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <project.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] border-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
