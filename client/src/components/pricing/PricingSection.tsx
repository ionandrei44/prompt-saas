import { motion } from "framer-motion";
import { Container } from "../layout";
import { GlassButton, Badge } from "../ui";
import { theme } from "../../styles/theme";
import { Check } from "@phosphor-icons/react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out",
      features: [
        "Connect up to 2 platforms",
        "Basic growth dashboard",
        "Weekly metric updates",
        "7-day data history",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "month",
      description: "For serious indie developers",
      features: [
        "Connect unlimited platforms",
        "Real-time metric updates",
        "Unlimited data history",
        "Milestone tracking",
        "Growth score analytics",
        "Trend insights",
        "Email notifications",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$299",
      originalPrice: "$599",
      period: "one-time",
      description: "One payment, forever access",
      features: [
        "Everything in Pro",
        "Lifetime access",
        "All future features",
        "Priority support",
        "Early access to beta features",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: theme.colors.background.secondary }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.primary[500] }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: theme.colors.secondary[500] }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container
        maxWidth="7xl"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            Simple,{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 100%)`,
              }}
            >
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                marginTop: plan.popular ? "-1.5rem" : "0",
                marginBottom: plan.popular ? "1.5rem" : "0",
              }}
            >
              <div
                className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular ? "shadow-2xl" : "shadow-lg hover:shadow-2xl"
                }`}
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, ${theme.colors.primary[500]}15 0%, ${theme.colors.secondary[500]}15 100%)`
                    : theme.effects.glass.background,
                  backdropFilter: theme.effects.glass.backdropFilter,
                  border: plan.popular
                    ? `2px solid ${theme.colors.primary[400]}`
                    : `1px solid ${theme.colors.glass.border}`,
                  boxShadow: plan.popular
                    ? `0 0 0 1px ${theme.colors.primary[400]}40, 0 20px 40px -10px ${theme.colors.primary[500]}50, inset 0 1px 0 ${theme.colors.primary[300]}20`
                    : undefined,
                }}
              >
                {plan.popular && (
                  <div className="mb-4 flex justify-center">
                    <Badge variant="primary">⚡ Most Popular</Badge>
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.tertiary }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    {plan.originalPrice && (
                      <span
                        className="text-xl line-through opacity-60"
                        style={{ color: theme.colors.text.muted }}
                      >
                        {plan.originalPrice}
                      </span>
                    )}
                    <span
                      className="text-6xl font-bold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.tertiary }}
                  >
                    {plan.period === "one-time"
                      ? "one-time payment"
                      : `/ ${plan.period}`}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: theme.colors.primary[500],
                        }}
                      >
                        <Check size={12} weight="bold" className="text-white" />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <GlassButton
                  variant={plan.popular ? "primary" : "glass"}
                  size="lg"
                  className="w-full"
                  onClick={() => (window.location.href = "/app")}
                >
                  {plan.popular ? "Get Started Now" : "Start Free"}
                </GlassButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 pt-12"
          style={{
            borderTop: `1px solid ${theme.colors.glass.border}`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              icon: "🔒",
              text: "Secure Payment",
              color: theme.colors.text.secondary,
            },
            {
              icon: "✓",
              text: "Cancel Anytime",
              color: theme.colors.status.success.main,
            },
            {
              icon: "⚡",
              text: "Instant Access",
              color: theme.colors.text.secondary,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-3xl" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span
                className="font-medium text-lg"
                style={{ color: theme.colors.text.secondary }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingSection;
