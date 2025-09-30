import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  stagger?: boolean;
}

const Grid = ({
  children,
  className = "",
  cols = { default: 1, md: 2, lg: 3 },
  gap = "md",
  animate = false,
  stagger = false,
}: GridProps) => {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  const colClasses = [
    cols.default ? `grid-cols-${cols.default}` : "grid-cols-1",
    cols.sm ? `sm:grid-cols-${cols.sm}` : "",
    cols.md ? `md:grid-cols-${cols.md}` : "",
    cols.lg ? `lg:grid-cols-${cols.lg}` : "",
    cols.xl ? `xl:grid-cols-${cols.xl}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const gridClasses = `
    grid
    ${colClasses}
    ${gapClasses[gap]}
    ${className}
  `.trim();

  if (animate && stagger) {
    return (
      <motion.div
        className={gridClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (animate) {
    return (
      <motion.div
        className={gridClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={gridClasses}>{children}</div>;
};

export default Grid;
