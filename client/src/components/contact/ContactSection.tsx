import { Container, Section } from "../layout";

const ContactSection = () => {
  return (
    <Section id="contact" background="white" padding="xl" animate>
      <Container maxWidth="7xl" className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-slate-700 mb-4">
            Contact Form Coming Soon
          </h3>
          <p className="text-slate-600 mb-6">
            We're building an amazing contact experience. For now, reach us at:
          </p>
          <a
            href="mailto:hello@promptflow.com"
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            hello@promptflow.com
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
