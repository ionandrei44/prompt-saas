import type { ReactNode } from "react";
import { theme } from "../../styles/theme";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const GlassButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: GlassButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[600]} 100%)`,
      color: theme.colors.text.primary,
      border: "none",
    },
    secondary: {
      background: `linear-gradient(135deg, ${theme.colors.secondary[500]} 0%, ${theme.colors.secondary[600]} 100%)`,
      color: theme.colors.background.primary,
      border: "none",
    },
    glass: {
      background: theme.effects.glass.background,
      backdropFilter: theme.effects.glass.backdropFilter,
      color: theme.colors.text.primary,
      border: theme.effects.glass.border,
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        rounded-lg
        font-semibold
        transition-all duration-300
        hover:scale-105
        hover:shadow-xl
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        cursor-pointer
        ${className}
      `}
      style={variantStyles[variant]}
    >
      {children}
    </button>
  );
};
