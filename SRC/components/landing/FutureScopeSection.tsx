import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Globe, View, Link2, UsersRound, TrendingUp } from "lucide-react";

const items = [
  { icon: Brain, title: "AI Predictive Analytics", desc: "Forecast student needs and optimize resource allocation." },
  { icon: Globe, title: "Multi-language Support", desc: "Serve diverse student populations in their native languages." },
  { icon: View, title: "AR Campus Tours", desc: "Immersive augmented reality guided campus exploration." },
  { icon: Link2, title: "Blockchain Verification", desc: "Tamper-proof document verification on distributed ledger." },
  { icon: UsersRound, title: "Parent Portal", desc: "Keep families informed and engaged in the onboarding process." },
  { icon: TrendingUp, title: "Placement Lifecycle", desc: "End-to-end career services from admission to placement." },
];

const FutureScopeSection = () => {
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
            Future <span className="gradient-text">Scope</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Building toward the future of student experience.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover gradient-border p-6"
            >
              <item.icon className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureScopeSection;
