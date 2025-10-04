import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container
        maxWidth="7xl"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8 sm:gap-12 lg:gap-16 min-h-screen pt-28 sm:pt-32 lg:pt-44">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left w-full lg:flex-1 lg:min-w-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-snug mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Organize Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI Prompts
              </span>
              <br />
              Like Never Before
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Create, organize, and reuse AI prompts across all your favorite
              tools. Built for individuals and teams who want to streamline
              their AI workflow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                color="primary"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free
              </Button>
              {/* <Button
                size="lg"
                variant="bordered"
                className="border-2 border-slate-300 text-slate-700 font-semibold px-8 py-3 text-lg hover:bg-slate-50 transition-all duration-300"
              >
                Watch Demo
              </Button> */}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 md:gap-2 lg:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: "💳", text: "No credit card required" },
                { icon: "⚡", text: "Setup in 1 minute" },
                { icon: "🤖", text: "Works with all AI tools" },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-2 md:gap-3 bg-white/60 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap w-full md:w-auto flex-shrink-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-xs font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="min-w-0 w-[90%] sm:w-auto sm:min-w-120 relative mt-8 lg:mt-0 max-w-125"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-slate-400">
                  Prompt Manager
                </span>
              </div>

              {/* Prompt Categories */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    name: "📝 Content Creation",
                    count: 24,
                    color: "bg-blue-50 text-blue-700",
                  },
                  {
                    name: "💻 Code Generation",
                    count: 18,
                    color: "bg-green-50 text-green-700",
                  },
                  {
                    name: "🎨 Design Prompts",
                    count: 12,
                    color: "bg-purple-50 text-purple-700",
                  },
                ].map((category, i) => (
                  <motion.div
                    key={category.name}
                    className={`flex items-center justify-between p-3 rounded-lg ${category.color}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm">{category.count} prompts</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="flex-1"
                >
                  New Prompt
                </Button>
                <Button size="sm" variant="bordered" className="flex-1">
                  Import
                </Button>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-slate-200/50"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-xs text-slate-500 mb-1">
                Active Workspace
              </div>
              <div className="font-semibold text-sm">Marketing Team</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-3 shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-xs opacity-90 mb-1">Quick Copy</div>
              <div className="font-semibold text-sm">⌘C Ready</div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
