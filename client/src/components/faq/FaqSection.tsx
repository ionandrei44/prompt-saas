import { Accordion, AccordionItem } from "@heroui/react";
import { Container } from "../layout";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is this dashboard for?",
      answer:
        "It's a personal growth dashboard for indie developers that aggregates metrics from GitHub, newsletters, analytics, Product Hunt, and more into one beautiful view. Track your progress and celebrate milestones.",
    },
    {
      question: "Which platforms can I connect?",
      answer:
        "You can connect GitHub (stars, forks, activity), newsletter providers (subscribers, open rates), Google Analytics or Plausible (traffic), Product Hunt (upvotes), Reddit (karma), and manually upload Twitter/X data via CSV.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We use secure OAuth authentication and only request read-only access to your metrics. Your data is encrypted and stored safely. We never share your information with third parties.",
    },
    {
      question: "How often is data updated?",
      answer:
        "Pro users get real-time updates. Free users get weekly updates. You can always manually refresh your dashboard to see the latest metrics.",
    },
    {
      question: "Can I track multiple projects?",
      answer:
        "Yes! Connect multiple GitHub repos, websites, and newsletters. We'll aggregate all your metrics to show your overall indie dev growth.",
    },
    {
      question: "What's the Growth Score?",
      answer:
        "It's a simple, weighted score (out of 100) that combines all your platform metrics. Think of it as your overall indie dev progress meter. It helps you stay motivated and see the big picture.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: theme.colors.background.primary }}
    >
      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.accent.purple }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth="2xl" className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: theme.colors.text.primary, lineHeight: "1.3" }}
          >
            Frequently Asked{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
              }}
            >
              Questions
            </span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Everything you need to know about tracking your indie dev growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            variant="splitted"
            selectionMode="multiple"
            className="gap-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={
                  <span
                    className="text-lg font-bold"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {faq.question}
                  </span>
                }
                className="rounded-xl overflow-hidden"
                style={{
                  background: theme.effects.cardGlass.background,
                  backdropFilter: theme.effects.cardGlass.backdropFilter,
                  border: theme.effects.cardGlass.border,
                }}
                classNames={{
                  trigger:
                    "cursor-pointer p-6 hover:opacity-80 transition-opacity",
                  content: "px-6 pb-6 pt-0",
                  title: "text-left",
                }}
              >
                <p
                  className="text-base leading-relaxed"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help section */}
        <motion.div
          className="mt-16 text-center p-8 rounded-2xl"
          style={{
            background: theme.effects.glass.background,
            backdropFilter: theme.effects.glass.backdropFilter,
            border: theme.effects.glass.border,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            Still have questions?
          </h3>
          <p
            className="text-lg mb-6"
            style={{ color: theme.colors.text.secondary }}
          >
            We're here to help. Reach out to our team anytime.
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[600]} 100%)`,
              color: theme.colors.text.primary,
            }}
          >
            Contact Support
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default FaqSection;
