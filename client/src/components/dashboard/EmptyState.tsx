import { theme } from "../../styles/theme";

interface EmptyStateProps {
  platform: string;
  icon: string;
  onConnect?: () => void;
}

const EmptyState = ({ platform, icon, onConnect }: EmptyStateProps) => {
  return (
    <div
      className="rounded-xl p-8 border text-center"
      style={{
        background: theme.effects.cardGlass.background,
        backdropFilter: theme.effects.cardGlass.backdropFilter,
        borderColor: theme.colors.glass.border,
      }}
    >
      <span className="text-5xl mb-4 block">{icon}</span>
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: theme.colors.text.primary }}
      >
        Connect {platform}
      </h3>
      <p
        className="text-sm mb-6 max-w-md mx-auto"
        style={{ color: theme.colors.text.secondary }}
      >
        Connect your {platform} account to see metrics, insights, and growth
        trends.
      </p>
      <button
        onClick={onConnect}
        className="px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
        style={{
          backgroundColor: theme.colors.primary[500],
          color: theme.colors.text.primary,
        }}
      >
        Connect {platform}
      </button>
    </div>
  );
};

export default EmptyState;
