# Glassmorphic Theme System

A professional, scalable design system for the Indie Dev Dashboard with a glassmorphic aesthetic.

## Theme Colors

### Background Colors

- **Primary**: `#0A1628` - Deep blue-black
- **Secondary**: `#111D2E` - Slightly lighter blue-black
- **Tertiary**: `#1A2942` - Card background base

### Primary Blue Tones

- Scale from `50` (lightest) to `900` (darkest)
- Main primary: `#0066FF` (500)

### Secondary Yellow/Amber Tones

- Scale from `50` (lightest) to `900` (darkest)
- Main secondary: `#FFC300` (500)

### Accent Colors

- **Purple**: `#A78BFA`
- **Cyan**: `#22D3EE`
- **Pink**: `#F472B6`
- **Emerald**: `#34D399`

### Text Colors

- **Primary**: `#F8FAFC` - Almost white
- **Secondary**: `#CBD5E1` - Light grey
- **Tertiary**: `#94A3B8` - Medium grey
- **Muted**: `#64748B` - Darker grey

### Status Colors

- **Error**: Light `#FEE2E2`, Main `#EF4444`, Dark `#B91C1C`
- **Warning**: Light `#FEF3C7`, Main `#F59E0B`, Dark `#B45309`
- **Success**: Light `#D1FAE5`, Main `#10B981`, Dark `#047857`
- **Info**: Light `#DBEAFE`, Main `#3B82F6`, Dark `#1E40AF`

## Components

### GlassCard

A reusable card component with glassmorphic effect.

```tsx
import { GlassCard } from "@/components/ui";

<GlassCard padding="md" hover>
  {/* Your content */}
</GlassCard>;
```

**Props:**

- `children`: ReactNode - Content to display
- `className?`: string - Additional CSS classes
- `hover?`: boolean - Enable hover animation
- `padding?`: 'sm' | 'md' | 'lg' | 'xl' - Padding size

### GlassButton

A button component with multiple variants.

```tsx
import { GlassButton } from "@/components/ui";

<GlassButton variant="primary" size="lg" onClick={() => {}}>
  Click Me
</GlassButton>;
```

**Props:**

- `children`: ReactNode - Button text/content
- `onClick?`: () => void - Click handler
- `variant?`: 'primary' | 'secondary' | 'glass' - Button style
- `size?`: 'sm' | 'md' | 'lg' - Button size
- `disabled?`: boolean - Disabled state
- `type?`: 'button' | 'submit' | 'reset' - Button type

### Badge

A small label component for tags and status indicators.

```tsx
import { Badge } from "@/components/ui";

<Badge variant="primary">New Feature</Badge>;
```

**Props:**

- `children`: ReactNode - Badge text
- `variant?`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' - Badge style
- `className?`: string - Additional CSS classes

## Using the Theme

Import the theme object to access colors, effects, and other design tokens:

```tsx
import { theme } from '@/styles/theme';

// Use theme colors
<div style={{ color: theme.colors.text.primary }}>
  Hello World
</div>

// Use glass effects
<div style={{
  background: theme.effects.glass.background,
  backdropFilter: theme.effects.glass.backdropFilter,
  border: theme.effects.glass.border,
}}>
  Glass Container
</div>

// Use typography
<h1 style={{
  fontSize: theme.typography.fontSize['4xl'],
  fontWeight: theme.typography.fontWeight.bold
}}>
  Heading
</h1>
```

## Glass Effects

### Standard Glass

```tsx
theme.effects.glass;
```

- Background: `rgba(26, 41, 66, 0.4)`
- Backdrop Filter: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Box Shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`

### Glass Hover

```tsx
theme.effects.glassHover;
```

Enhanced glass effect for hover states.

### Card Glass

```tsx
theme.effects.cardGlass;
```

Lighter glass effect optimized for cards.

## Best Practices

1. **Consistency**: Always use theme values instead of hardcoding colors
2. **Accessibility**: Ensure sufficient contrast between text and background
3. **Performance**: Use backdrop-filter sparingly as it can impact performance
4. **Responsiveness**: All components are mobile-first and responsive
5. **Reusability**: Create new components in separate files with clear props

## Adding New Components

When creating new UI components:

1. Create a new file in `src/components/ui/`
2. Import the theme: `import { theme } from '@/styles/theme'`
3. Use TypeScript for props definitions
4. Export the component
5. Add it to `src/components/ui/index.ts`

Example:

```tsx
// src/components/ui/MyComponent.tsx
import type { ReactNode } from "react";
import { theme } from "@/styles/theme";

interface MyComponentProps {
  children: ReactNode;
  variant?: "default" | "special";
}

export const MyComponent = ({
  children,
  variant = "default",
}: MyComponentProps) => {
  return <div style={{ color: theme.colors.text.primary }}>{children}</div>;
};
```

Then add to index:

```tsx
// src/components/ui/index.ts
export { MyComponent } from "./MyComponent";
```
