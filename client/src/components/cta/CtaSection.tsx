import { motion } from "framer-motion";
import { Container } from "../layout";
import {
  ArrowRight,
  GithubLogo,
  ChartLine,
  Sparkle,
} from "@phosphor-icons/react";
import { GlassButton, GlassCard } from "../ui";
import { theme } from "../../styles/theme";

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: theme.colors.background.primary }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.primary[500] }}
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.secondary[500] }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth="7xl" className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <GlassCard padding="xl" className="text-center">
            {/* Icon badges */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: <GithubLogo size={24} weight="fill" />,
                  color: theme.colors.primary[500],
                },
                {
                  icon: <ChartLine size={24} weight="fill" />,
                  color: theme.colors.secondary[500],
                },
                {
                  icon: <Sparkle size={24} weight="fill" />,
                  color: theme.colors.accent.purple,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: theme.colors.text.primary }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Track Your
              <br />
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
                }}
              >
                Growth Journey?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join indie developers who are already tracking their GitHub stars,
              newsletter subscribers, website traffic, and more—all in one
              beautiful dashboard.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassButton
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/dashboard")}
                className="group flex flex-row items-center justify-center"
              >
                <span>Start Tracking Free</span>
                <ArrowRight
                  size={20}
                  weight="bold"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </GlassButton>
              <GlassButton
                variant="glass"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Pricing
              </GlassButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-8"
              style={{
                borderTop: `1px solid ${theme.colors.glass.border}`,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "✓ No credit card required",
                "✓ 5-minute setup",
                "✓ Cancel anytime",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
