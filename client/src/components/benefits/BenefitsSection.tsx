import { motion } from "framer-motion";
import {
  FolderOpen,
  ClockClockwise,
  Users,
  FileText,
  GitBranch,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import Container from "../layout/Container";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <FolderOpen size={32} weight="fill" />,
    title: "Stay Organized",
    description:
      "Keep all your prompts neatly organized in folders and categories for quick access.",
  },
  {
    icon: <ClockClockwise size={32} weight="fill" />,
    title: "Save Time",
    description:
      "Reuse proven prompts instead of writing from scratch every time you need them.",
  },
  {
    icon: <Users size={32} weight="fill" />,
    title: "Work Smarter with Teams",
    description:
      "Share and collaborate on prompts with your team for consistent AI interactions.",
  },
  {
    icon: <FileText size={32} weight="fill" />,
    title: "Flexible Templates",
    description:
      "Create customizable prompt templates with variables for different use cases.",
  },
  {
    icon: <GitBranch size={32} weight="fill" />,
    title: "Version Control",
    description:
      "Track changes and iterate on your prompts with built-in versioning system.",
  },
  {
    icon: <ArrowsClockwise size={32} weight="fill" />,
    title: "Cross-Platform Reuse",
    description:
      "Use your prompts across ChatGPT, Claude, Gemini, and other AI platforms seamlessly.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <Container maxWidth="7xl" className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              PromptBond
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your AI prompts efficiently
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
