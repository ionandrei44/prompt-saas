import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Container, Section, Grid } from "../layout";

const features = [
  {
    icon: "🚀",
    title: "Multi-Tool Integration",
    description:
      "Execute prompts directly in ChatGPT, Claude, Midjourney, and more. One-click deployment across all your AI tools.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏗️",
    title: "Smart Workflows",
    description:
      "Chain prompts together for complex tasks. Create reusable templates with dynamic variables.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    description:
      "Share prompts with your team. Real-time editing, comments, and approval workflows.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description:
      "Track which prompts perform best. Get AI-powered suggestions to improve your prompts.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "⚡",
    title: "Quick Capture",
    description:
      "Browser extension and keyboard shortcuts. Capture and organize prompts from anywhere.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your prompts stay private. Enterprise-grade security with team permission controls.",
    color: "from-gray-600 to-gray-800",
  },
];

const FeaturesSection = () => {
  return (
    <Section id="features" background="gray" padding="xl" animate>
      <Container maxWidth="7xl">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Why Choose PromptFlow
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to master
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI prompts
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From individual productivity to team collaboration, we've built the
            most comprehensive prompt management platform.
          </motion.p>
        </div>

        <Grid
          cols={{ default: 1, md: 2, lg: 3 }}
          gap="lg"
          animate
          stagger
          className="mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </Grid>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to streamline your AI workflow?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of AI enthusiasts and teams who trust PromptFlow
              for their prompt management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
