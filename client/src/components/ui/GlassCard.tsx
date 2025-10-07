import type { ReactNode, CSSProperties } from "react";
import { theme } from "../../styles/theme";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

export const GlassCard = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  style = {},
}: GlassCardProps) => {
  const baseStyles = {
    background: theme.effects.cardGlass.background,
    backdropFilter: theme.effects.cardGlass.backdropFilter,
    border: theme.effects.cardGlass.border,
    boxShadow: theme.effects.cardGlass.boxShadow,
    ...style,
  };

  return (
    <div
      className={`
        rounded-xl
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-300 hover:scale-[1.02]" : ""}
        ${className}
      `}
      style={baseStyles}
    >
      {children}
    </div>
  );
};
