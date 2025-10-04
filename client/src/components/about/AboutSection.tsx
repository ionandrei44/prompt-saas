import { motion } from "framer-motion";
import { Container, Section } from "../layout";
import { Lightbulb, Target, TrendUp } from "@phosphor-icons/react";

const AboutSection = () => {
  return (
    <Section id="about" background="gray" padding="xl" animate>
      <Container maxWidth="7xl" className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              PrompTrack
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Building the future of AI prompt management for creators,
            developers, and teams
          </p>
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-slate-200 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
              <Lightbulb size={32} weight="fill" className="text-white" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Our Story
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 text-center max-w-4xl mx-auto">
            PrompTrack was born from a simple idea: AI is powerful, but managing
            your prompts shouldn't be a headache. We wanted a clean, easy-to-use
            space where anyone, from creators to developers, can store,
            organize, and reuse their prompts in seconds.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
            Our goal is to make AI work smoother, faster, and more productive,
            so you can focus on creating, experimenting, and getting results,
            without losing track of your ideas.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2.5 rounded-lg">
                <Target size={28} weight="fill" className="text-white" />
              </div>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 text-center">
              Our Mission
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
              To provide a seamless, intuitive platform that empowers users to
              harness the full potential of AI through organized, accessible
              prompt management.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-lg">
                <TrendUp size={28} weight="fill" className="text-white" />
              </div>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 text-center">
              Our Vision
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
              To become the go-to solution for prompt management, helping
              individuals and teams work more efficiently with AI technologies
              worldwide.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
