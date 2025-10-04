import { motion } from "framer-motion";
import { FolderOpen, CopySimple, TextAa } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <FolderOpen size={32} weight="fill" />,
    title: "Create & Organize",
    description:
      "Set up your workspace and organize prompts into folders by category or AI tool.",
  },
  {
    number: "02",
    icon: <CopySimple size={32} weight="fill" />,
    title: "Save & Reuse",
    description:
      "Add your favorite prompts, edit them anytime, and copy with one click whenever you need them.",
  },
  {
    number: "03",
    icon: <TextAa size={32} weight="fill" />,
    title: "Customize with Templates",
    description:
      "Turn prompts into reusable templates with variables, so you can adapt them to any task in seconds.",
  },
];

const HowItWorksSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"
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
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"
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

      <Container maxWidth="7xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 transform -translate-x-1/2" />

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
                    <motion.div
                      className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-lg transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Timeline Center Point */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white shadow-lg z-10"
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
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-slate-600 mb-6">
            Ready to streamline your AI workflow?
          </p>
          <button
            onClick={() => navigate("/app")}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Get Started for Free
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
