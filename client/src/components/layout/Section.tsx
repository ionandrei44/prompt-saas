import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient" | "dark";
  animate?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

const Section = ({
  children,
  className = "",
  id,
  background = "white",
  animate = false,
  padding = "lg",
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    dark: "bg-slate-900 text-white",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  const sectionClasses = `
    ${backgroundClasses[background]}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClasses}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

export default Section;
