import { Container, Section } from "../layout";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "Free for personal use",
        "Up to 15 prompts",
        "Up to 3 categories",
        "Prompt variables",
        "Access to 3 templates",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$7.99",
      period: "month",
      description: "For power users",
      features: [
        "Everything in Free",
        "Unlimited prompts",
        "Unlimited categories",
        "Prompt versioning",
        "Full access to templates",
      ],
      popular: true,
    },
    {
      name: "Lifetime Deal",
      price: "$199.99",
      originalPrice: "$349.99",
      period: "one-time",
      description: "Limited time offer",
      features: [
        "Everything in Pro",
        "One-time payment",
        "Lifetime access",
        "Limited time offer",
      ],
      popular: false,
    },
  ];

  const trustFeatures = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      text: "Secure Payment",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: "Cancel Anytime",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      text: "Instant Access",
    },
  ];

  return (
    <Section id="pricing" background="white" padding="xl" animate>
      <Container maxWidth="7xl" className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-slate-600 mb-20 max-w-3xl mx-auto">
          Choose the plan that fits your workflow. Start free, upgrade when
          you're ready.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 max-w-6xl mx-auto mb-20 px-4 justify-items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-full max-w-lg relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl lg:scale-110 hover:shadow-2xl"
                  : "bg-white border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-purple-400"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 flex-wrap">
                  {plan.originalPrice && (
                    <span className="text-base sm:text-lg line-through opacity-70">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span
                    className={`text-4xl sm:text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    plan.popular ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {plan.period === "one-time"
                    ? "one-time payment"
                    : `/ ${plan.period}`}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8 text-left flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-purple-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-blue-50" : "text-slate-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => (window.location.href = "/app")}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-sm sm:text-base mt-auto ${
                  plan.popular
                    ? "bg-white text-slate-900 hover:bg-blue-50"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="flex flex-col sm:flex-row sm:items-start items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-16 pt-12 border-t border-slate-200 px-4">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-green-600">{feature.icon}</div>
              <span className="text-slate-700 font-medium text-sm sm:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PricingSection;
