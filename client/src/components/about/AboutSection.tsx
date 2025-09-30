import { Container, Section } from "../layout";

const AboutSection = () => {
  return (
    <Section id="about" background="gray" padding="xl" animate>
      <Container maxWidth="7xl" className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          About PromptFlow
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
          We're building the future of AI prompt management for individuals and
          teams.
        </p>
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-700 mb-4">Our Story</h3>
          <p className="text-slate-600">
            Born from the frustration of scattered prompts across multiple
            tools, PromptFlow brings order to your AI workflow chaos.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
