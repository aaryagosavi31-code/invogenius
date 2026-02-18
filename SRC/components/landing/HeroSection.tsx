import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            AI-Powered Student Onboarding
          </div>

          <h1 className="section-heading mb-6 text-5xl sm:text-6xl lg:text-7xl">
            Seamless Student Onboarding.{" "}
            <br />
            <span className="gradient-text neon-glow">Powered by AI.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transforming engineering college onboarding with intelligent
            automation, real-time tracking, and personalized student guidance.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register" className="glow-button inline-flex items-center gap-2 text-lg">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="#features" className="glow-button-outline inline-flex items-center gap-2 text-lg">
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Floating chatbot icon */}
        <motion.div
          className="absolute bottom-10 right-10 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass-card flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg shadow-primary/20">
            <span className="text-2xl">🤖</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
