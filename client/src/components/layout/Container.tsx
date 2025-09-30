import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const Container = ({
  children,
  className = "",
  maxWidth = "7xl",
  padding = "lg",
  animate = false,
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 py-2",
    md: "px-6 py-4",
    lg: "px-4 py-8 sm:px-6 lg:px-8",
    xl: "px-4 py-12 sm:px-6 lg:px-8 xl:py-16",
  };

  const containerClasses = `
    mx-auto w-full
    ${maxWidthClasses[maxWidth]}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
