import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/ujjwal_photograph.jpeg";

const HeroSection = () => {
  const roleTags = ["L5 @Amazon", "IIT Roorkee", "Agentic AI", "FinTech"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-highlight/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          {/* Left column - Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-primary text-[10px] sm:text-xs font-mono">
                  <span className="flex h-2 w-2 items-center justify-center rounded-full bg-primary animate-pulse" />
                  {roleTags.map((tag) => (
                    <span key={tag} className="whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3 break-words"
            >
              Hi, I'm{" "}
              <span className="text-gradient block sm:inline">Ujjwal Chitransh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="text-lg sm:text-xl font-semibold text-foreground mb-2 break-words"
            >
              Software Development Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-full sm:max-w-2xl mb-8 leading-relaxed break-words"
            >
              Building scalable, secure, and distributed backend systems—from supporting critical lending infrastructure to agentic AI workflows, GenAI products, and high-scale platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:items-start mb-8 w-full"
            >
              <a
                href="https://drive.google.com/file/d/1OYVE1iOPKCgJkETiMsv5rS5tTVFWHvrj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] w-full sm:w-auto"
              >
                <ExternalLink size={16} />
                Open Resume
              </a>
              <a
                href="#experience"
                className="px-6 sm:px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200 w-full sm:w-auto text-center"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200 w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center justify-center md:justify-start gap-5"
            >
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
                  className="p-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="shrink-0 mt-6 md:mt-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.3)] flex items-center justify-center">
              <img
                src={profilePhoto}
                alt="Ujjwal Chitransh - Senior Software Development Engineer"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
