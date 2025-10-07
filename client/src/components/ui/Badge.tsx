import type { ReactNode } from "react";
import { theme } from "../../styles/theme";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) => {
  const variantStyles = {
    primary: {
      background: `${theme.colors.primary[500]}20`,
      color: theme.colors.primary[300],
      border: `1px solid ${theme.colors.primary[500]}40`,
    },
    secondary: {
      background: `${theme.colors.secondary[500]}20`,
      color: theme.colors.secondary[400],
      border: `1px solid ${theme.colors.secondary[500]}40`,
    },
    success: {
      background: `${theme.colors.status.success.main}20`,
      color: theme.colors.status.success.light,
      border: `1px solid ${theme.colors.status.success.main}40`,
    },
    warning: {
      background: `${theme.colors.status.warning.main}20`,
      color: theme.colors.status.warning.light,
      border: `1px solid ${theme.colors.status.warning.main}40`,
    },
    error: {
      background: `${theme.colors.status.error.main}20`,
      color: theme.colors.status.error.light,
      border: `1px solid ${theme.colors.status.error.main}40`,
    },
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-sm font-medium
        ${className}
      `}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
};
