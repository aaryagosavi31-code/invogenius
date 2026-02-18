import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileCheck, CreditCard, BookOpen, Clock, Building2, Monitor,
  Users, CheckCircle, Lock, MessageCircle, MapPin, Target,
} from "lucide-react";

const features = [
  { icon: FileCheck, title: "Document Verification", desc: "AI-powered validation of student documents with instant feedback." },
  { icon: CreditCard, title: "Fee Payment Integration", desc: "Seamless payment gateway with automated receipt generation." },
  { icon: BookOpen, title: "Course Registration", desc: "Smart conflict detection and prerequisite validation." },
  { icon: Clock, title: "Timetable Access", desc: "Personalized schedules synced across all devices." },
  { icon: Building2, title: "Hostel Allocation", desc: "Intelligent room assignment based on preferences." },
  { icon: Monitor, title: "LMS Onboarding", desc: "One-click setup for learning management systems." },
  { icon: Users, title: "Mentoring System", desc: "AI-matched mentor-mentee pairing for guidance." },
  { icon: CheckCircle, title: "Compliance Training", desc: "Track mandatory training modules and certifications." },
  { icon: Lock, title: "Digital Document Vault", desc: "Secure cloud storage for all academic documents." },
  { icon: MessageCircle, title: "24/7 AI Chatbot", desc: "Instant answers to onboarding queries, anytime." },
  { icon: MapPin, title: "Campus Navigation", desc: "Interactive maps and AR-ready campus guides." },
  { icon: Target, title: "Clubs & Events", desc: "Discover and join student organizations seamlessly." },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="features" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading mb-4">
            Core <span className="gradient-text">Features</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything students and administrators need, in one intelligent platform.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card-hover gradient-border p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
