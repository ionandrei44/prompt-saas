/**
 * Glassmorphic Theme Configuration
 * A professional, scalable color system for the Indie Dev Dashboard
 */

export const theme = {
  colors: {
    // Background colors - Dark blue gradients
    background: {
      primary: "#0A1628", // Deep blue-black
      secondary: "#111D2E", // Slightly lighter blue-black
      tertiary: "#1A2942", // Card background base
      gradient:
        "linear-gradient(135deg, #0A1628 0%, #111D2E 50%, #1A2942 100%)",
    },

    // Primary blue tones
    primary: {
      50: "#E6F0FF",
      100: "#CCE0FF",
      200: "#99C2FF",
      300: "#66A3FF",
      400: "#3385FF",
      500: "#0066FF", // Main primary
      600: "#0052CC",
      700: "#003D99",
      800: "#002966",
      900: "#001433",
    },

    // Secondary yellow/amber tones
    secondary: {
      50: "#FFF9E6",
      100: "#FFF3CC",
      200: "#FFE799",
      300: "#FFDB66",
      400: "#FFCF33",
      500: "#FFC300", // Main secondary
      600: "#CC9C00",
      700: "#997500",
      800: "#664E00",
      900: "#332700",
    },

    // Accent colors
    accent: {
      purple: "#A78BFA",
      cyan: "#22D3EE",
      pink: "#F472B6",
      emerald: "#34D399",
    },

    // Text colors
    text: {
      primary: "#F8FAFC", // Almost white
      secondary: "#CBD5E1", // Light grey
      tertiary: "#94A3B8", // Medium grey
      muted: "#64748B", // Darker grey
    },

    // Error/Warning/Success states
    status: {
      error: {
        light: "#FEE2E2",
        main: "#EF4444",
        dark: "#B91C1C",
      },
      warning: {
        light: "#FEF3C7",
        main: "#F59E0B",
        dark: "#B45309",
      },
      success: {
        light: "#D1FAE5",
        main: "#10B981",
        dark: "#047857",
      },
      info: {
        light: "#DBEAFE",
        main: "#3B82F6",
        dark: "#1E40AF",
      },
    },

    // Glass effect colors
    glass: {
      white: "rgba(255, 255, 255, 0.1)",
      whiteHover: "rgba(255, 255, 255, 0.15)",
      dark: "rgba(10, 22, 40, 0.5)",
      darkHover: "rgba(10, 22, 40, 0.7)",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },

  // Glass morphism effects
  effects: {
    glass: {
      background: "rgba(26, 41, 66, 0.4)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    },
    glassHover: {
      background: "rgba(26, 41, 66, 0.6)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.5)",
    },
    cardGlass: {
      background: "rgba(26, 41, 66, 0.3)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
    },
  },

  // Spacing system
  spacing: {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
  },

  // Border radius
  radius: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Typography
  typography: {
    fontFamily: {
      sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
} as const;

export type Theme = typeof theme;
