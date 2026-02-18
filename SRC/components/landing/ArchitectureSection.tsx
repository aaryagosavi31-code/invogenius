import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const layers = [
  {
    title: "User Engagement Layer",
    items: ["Web App", "Mobile App", "AI Chatbot", "Email/SMS"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "AI / LLM Intelligence Layer",
    items: ["NLP Engine", "Predictive Analytics", "Smart Routing", "Recommendation Engine"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Microservices Layer",
    items: ["Auth Service", "Document Service", "Payment Service", "Notification Service"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Data & Integration Layer",
    items: ["PostgreSQL", "Redis Cache", "ERP Integration", "LMS APIs"],
    color: "from-primary/15 to-secondary/5",
  },
];

const ArchitectureSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading mb-4">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A layered, scalable architecture built for enterprise-grade reliability.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`glass-card overflow-hidden bg-gradient-to-r ${layer.color} p-6`}>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{layer.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="mx-auto flex h-8 w-px items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
