import { motion } from "framer-motion";
import { Plug, ChartLine, RocketLaunch } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import { GlassCard, GlassButton } from "../ui";
import { theme } from "../../styles/theme";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Plug size={32} weight="fill" />,
    title: "Connect Your Platforms",
    description:
      "Link your GitHub, newsletter provider, analytics, and Product Hunt accounts with secure OAuth.",
    color: theme.colors.primary[500],
  },
  {
    number: "02",
    icon: <ChartLine size={32} weight="fill" />,
    title: "Watch Your Dashboard Fill Up",
    description:
      "We automatically fetch your metrics and display them in real-time. No manual work required.",
    color: theme.colors.secondary[500],
  },
  {
    number: "03",
    icon: <RocketLaunch size={32} weight="fill" />,
    title: "Track Growth & Celebrate Wins",
    description:
      "Monitor trends, hit milestones, and get insights. Stay motivated as you build your indie empire.",
    color: theme.colors.accent.emerald,
  },
];

const HowItWorksSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: theme.colors.background.secondary }}
    >
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.primary[500] }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.secondary[500] }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container
        maxWidth="7xl"
        className="relative z-10 px-8 sm:px-10 lg:px-14 xl:px-18"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            How It{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
              }}
            >
              Works
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Get started in three simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Hidden on mobile, visible on md and up */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
            style={{
              background: `linear-gradient(180deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
            }}
          />

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <GlassCard hover className="relative">
                      {/* Step Number */}
                      <div
                        className="absolute -top-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div
                        className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
                        style={{
                          background: `${step.color}20`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-semibold mb-3"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="leading-relaxed text-base sm:text-lg"
                        style={{ color: theme.colors.text.tertiary }}
                      >
                        {step.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Timeline Center Point */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      className="w-6 h-6 rounded-full border-4 shadow-lg z-10"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                        borderColor: theme.colors.background.secondary,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>

                {/* Mobile Timeline Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div
                      className="w-0.5 h-8"
                      style={{
                        background: `linear-gradient(180deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                      }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlassButton
            variant="primary"
            size="lg"
            onClick={() => navigate("/app")}
          >
            Start Tracking Your Growth
          </GlassButton>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
