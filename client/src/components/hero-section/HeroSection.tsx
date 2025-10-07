import { motion } from "framer-motion";
import Container from "../layout/Container";
import { GlassCard, GlassButton, Badge } from "../ui";
import { theme } from "../../styles/theme";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: theme.colors.background.gradient }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.primary[500] }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: theme.colors.secondary[500] }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.accent.purple }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container
        maxWidth="7xl"
        className="relative z-10 w-full px-12 sm:px-16 lg:px-20 xl:px-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-center items-center gap-12 lg:gap-16 min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left w-full lg:flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: theme.colors.text.primary }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Growth,
              <br />
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
                }}
              >
                All Metrics
              </span>
              <br />
              One Dashboard
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{ color: theme.colors.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Centralize your GitHub stars, newsletter subscribers, website
              traffic, and Product Hunt metrics. Track progress, visualize
              growth, and stay motivated as an indie developer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <GlassButton variant="primary" size="lg">
                Start Tracking Free
              </GlassButton>
              {/* <GlassButton variant="glass" size="lg">
                View Demo Dashboard
              </GlassButton> */}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: "⚡", text: "5-min setup" },
                { icon: "🔗", text: "Connect 6+ platforms" },
                { icon: "📈", text: "Real-time insights" },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: theme.effects.glass.background,
                    backdropFilter: theme.effects.glass.backdropFilter,
                    border: theme.effects.glass.border,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Dashboard Card */}
            <GlassCard className="relative" hover>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  Growth Dashboard
                </h3>
                <Badge variant="success">Live</Badge>
              </div>

              {/* Metric Cards */}
              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: "⭐",
                    platform: "GitHub Stars",
                    value: "1,247",
                    change: "+23% this week",
                    color: theme.colors.primary[500],
                  },
                  {
                    icon: "�",
                    platform: "Newsletter Subs",
                    value: "3,891",
                    change: "+12% this month",
                    color: theme.colors.secondary[500],
                  },
                  {
                    icon: "📊",
                    platform: "Website Traffic",
                    value: "12.4K",
                    change: "+8% this week",
                    color: theme.colors.accent.cyan,
                  },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.platform}
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{
                      background: `${metric.color}15`,
                      border: `1px solid ${metric.color}30`,
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                        style={{ background: `${metric.color}20` }}
                      >
                        {metric.icon}
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {metric.platform}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: theme.colors.text.tertiary }}
                        >
                          {metric.change}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {metric.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Growth Score */}
              <div
                className="p-4 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary[500]}20 0%, ${theme.colors.secondary[500]}20 100%)`,
                  border: `1px solid ${theme.colors.primary[500]}30`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      Overall Growth Score
                    </div>
                    <div
                      className="text-3xl font-bold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      87/100
                    </div>
                  </div>
                  <div className="text-5xl">🚀</div>
                </div>
              </div>
            </GlassCard>

            {/* Floating Achievement Card */}
            <motion.div
              className="absolute -top-6 -right-6 p-4 rounded-lg"
              style={{
                background: theme.effects.glassHover.background,
                backdropFilter: theme.effects.glassHover.backdropFilter,
                border: theme.effects.glassHover.border,
                boxShadow: theme.effects.glassHover.boxShadow,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl mb-2">🏆</div>
              <div
                className="text-xs font-medium"
                style={{ color: theme.colors.text.secondary }}
              >
                New Milestone
              </div>
              <div
                className="text-sm font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                1K Stars!
              </div>
            </motion.div>

            {/* Floating Platform Icons */}
            <motion.div
              className="absolute -bottom-6 -left-6 p-3 rounded-lg"
              style={{
                background: theme.effects.glass.background,
                backdropFilter: theme.effects.glass.backdropFilter,
                border: theme.effects.glass.border,
              }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex gap-2">
                {["⭐", "📧", "📊", "🚀"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${theme.colors.primary[500]}20` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
