import { Accordion, AccordionItem } from "@heroui/react";
import { Container, Section } from "../layout";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is PrompTrack?",
      answer:
        "PrompTrack is a web app that helps you organize, save, and reuse your AI prompts efficiently. You can create folders, categorize prompts, and turn them into reusable templates with variables.",
    },
    {
      question: "Who is this app for?",
      answer:
        "It's designed for anyone who uses AI tools regularly and wants a simple way to keep their prompts organized and accessible.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. Your prompts are securely stored in the cloud, and you have full control over your data.",
    },
    {
      question: "Is this app free?",
      answer:
        "PrompTrack offers a free version with limited features. A paid plan will provide full access, including unlimited prompts, folders, and templates.",
    },
    {
      question: "Can I access the app from any device?",
      answer:
        "Absolutely. PrompTrack is web-based and responsive, so you can use it on your computer, tablet, or mobile browser.",
    },
  ];

  return (
    <Section id="faq" className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out to us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion variant="shadow" selectionMode="single">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                }
                classNames={{
                  trigger: "cursor-pointer",
                }}
              >
                <p className="text-gray-600 pb-4">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default FaqSection;
