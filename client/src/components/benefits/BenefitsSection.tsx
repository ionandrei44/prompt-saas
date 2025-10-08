import { motion } from "framer-motion";
import {
  ChartLineUpIcon,
  GitBranchIcon,
  GaugeIcon,
  BellRingingIcon,
  TargetIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import Container from "../layout/Container";
import { GlassCard } from "../ui";
import { theme } from "../../styles/theme";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: <ChartLineUpIcon size={32} weight="fill" />,
    title: "Unified Growth View",
    description:
      "See all your metrics from GitHub, newsletters, analytics, and Product Hunt in one beautiful dashboard.",
    color: theme.colors.primary[500],
  },
  {
    icon: <TrendUpIcon size={32} weight="fill" />,
    title: "Track Progress Over Time",
    description:
      "Visualize your growth with weekly and monthly charts. Watch your indie projects flourish.",
    color: theme.colors.secondary[500],
  },
  {
    icon: <TargetIcon size={32} weight="fill" />,
    title: "Milestone Achievements",
    description:
      "Celebrate wins with automatic milestones. Hit 100 newsletter subs? 1K GitHub stars? We'll track it.",
    color: theme.colors.accent.emerald,
  },
  {
    icon: <GaugeIcon size={32} weight="fill" />,
    title: "Growth Score",
    description:
      "Get a simple, weighted score that combines all your platforms into one motivating number.",
    color: theme.colors.accent.purple,
  },
  {
    icon: <GitBranchIcon size={32} weight="fill" />,
    title: "Multiple Platform Support",
    description:
      "Connect GitHub, Google Analytics, Plausible, Product Hunt, newsletters, and more.",
    color: theme.colors.accent.cyan,
  },
  {
    icon: <BellRingingIcon size={32} weight="fill" />,
    title: "Smart Insights",
    description:
      "Get notified of trends and highlights. 20% growth this month? We'll tell you.",
    color: theme.colors.accent.pink,
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="relative py-16 sm:py-20 lg:py-24"
      style={{ background: theme.colors.background.primary }}
    >
      <Container maxWidth="7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Why Track Your{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
              }}
            >
              Indie Growth
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Everything you need to monitor your progress and stay motivated
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <GlassCard hover className="h-full">
                {/* Icon Container */}
                <div
                  className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                  style={{
                    background: `${benefit.color}20`,
                    color: benefit.color,
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ color: theme.colors.text.primary }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  {benefit.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
