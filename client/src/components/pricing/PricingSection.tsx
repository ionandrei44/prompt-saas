import { Container, Section } from "../layout";

const PricingSection = () => {
  return (
    <Section id="pricing" background="white" padding="xl" animate>
      <Container maxWidth="7xl" className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
          Choose the plan that fits your workflow. Start free, upgrade when
          you're ready.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-slate-700 mb-4">
            Pricing Coming Soon
          </h3>
          <p className="text-slate-600">
            We're crafting the perfect pricing plans for individuals and teams.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default PricingSection;
