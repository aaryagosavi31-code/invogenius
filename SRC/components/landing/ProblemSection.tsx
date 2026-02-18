import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileWarning, Clock, BookX, Building2, Monitor, CalendarX } from "lucide-react";

const problems = [
  { icon: FileWarning, title: "Document Verification Confusion", desc: "Students lost in paperwork with unclear requirements and scattered submission portals." },
  { icon: Clock, title: "Fee Payment Delays", desc: "Complex payment processes causing missed deadlines and enrollment blocks." },
  { icon: BookX, title: "Course Registration Conflicts", desc: "Schedule clashes and prerequisite confusion during enrollment periods." },
  { icon: Building2, title: "Hostel Allocation Issues", desc: "Manual room assignment leading to delays and mismatches." },
  { icon: Monitor, title: "LMS Onboarding Challenges", desc: "Students struggle to set up and navigate learning management systems." },
  { icon: CalendarX, title: "Missed Deadlines", desc: "Critical dates lost in email threads and disconnected portals." },
];

const ProblemSection = () => {
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
            The <span className="gradient-text">Problem</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Students struggle with fragmented onboarding processes across multiple disconnected systems.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <problem.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
