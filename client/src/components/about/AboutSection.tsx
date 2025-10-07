import { motion } from "framer-motion";
import { Container } from "../layout";
import { Lightbulb, Target, TrendUp, Users } from "@phosphor-icons/react";
import { GlassCard } from "../ui";
import { theme } from "../../styles/theme";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: theme.colors.background.secondary }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.secondary[500] }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.primary[500] }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Container maxWidth="7xl" className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            Built for{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
              }}
            >
              Indie Makers
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            By indie developers, for indie developers. We understand the
            journey.
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard padding="xl" className="text-center">
            <div
              className="inline-flex p-4 rounded-2xl mb-8"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary[500]}20 0%, ${theme.colors.secondary[500]}20 100%)`,
              }}
            >
              <Lightbulb
                size={48}
                weight="fill"
                style={{ color: theme.colors.secondary[400] }}
              />
            </div>
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
            >
              Our Story
            </h3>
            <div className="space-y-6 text-lg leading-relaxed">
              <p style={{ color: theme.colors.text.tertiary }}>
                As indie developers ourselves, we know the struggle. You're
                building multiple projects, growing your newsletter,
                contributing to open source, creating content—and tracking it
                all feels like a full-time job.
              </p>
              <p style={{ color: theme.colors.text.tertiary }}>
                We built this dashboard because we needed it. A single place to
                see all our growth metrics, celebrate wins, and stay motivated.
                No more jumping between GitHub, analytics, and email tools. Just
                clean, beautiful data that shows you're making progress.
              </p>
              <p
                className="font-semibold text-xl"
                style={{ color: theme.colors.text.primary }}
              >
                Because every GitHub star, every newsletter subscriber, and
                every visitor matters. ✨
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target size={32} weight="fill" />,
              title: "Our Mission",
              description:
                "Empower indie developers with simple, beautiful growth tracking that keeps them motivated through every milestone.",
              color: theme.colors.primary[500],
            },
            {
              icon: <TrendUp size={32} weight="fill" />,
              title: "Our Vision",
              description:
                "Become the go-to growth dashboard for indie makers worldwide, celebrating every win big or small.",
              color: theme.colors.secondary[500],
            },
            {
              icon: <Users size={32} weight="fill" />,
              title: "Our Community",
              description:
                "Built by indie devs for indie devs. Join thousands of makers tracking their journey to success.",
              color: theme.colors.accent.emerald,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <GlassCard hover className="h-full text-center">
                <div
                  className="inline-flex p-4 rounded-xl mb-6"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: theme.colors.text.primary }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: "6+", label: "Platforms Supported" },
            { value: "24/7", label: "Metric Tracking" },
            { value: "100%", label: "Data Privacy" },
            { value: "∞", label: "Growth Potential" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-5xl font-bold mb-2"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: theme.colors.text.tertiary }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
