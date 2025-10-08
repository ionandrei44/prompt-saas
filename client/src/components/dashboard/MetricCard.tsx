import { Card, CardBody } from "@heroui/react";
import { type Icon } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

interface Platform {
  icon: Icon;
  name: string;
  metric: string;
  value: string | number;
  change: number;
  color: string;
}

interface MetricCardProps {
  platform: Platform;
}

const MetricCard = ({ platform }: MetricCardProps) => {
  const { icon: IconComponent, name, metric, value, change, color } = platform;

  return (
    <Card
      isPressable
      className="border hover:border-opacity-50 transition-all group"
      style={{
        background: theme.effects.glass.background,
        backdropFilter: theme.effects.glass.backdropFilter,
        borderColor: theme.colors.glass.border,
      }}
    >
      <CardBody className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <IconComponent
              size={24}
              weight="regular"
              style={{ color: theme.colors.text.primary }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: theme.colors.text.tertiary }}
            >
              {name}
            </span>
          </div>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Value */}
        <div className="mb-2">
          <div
            className="text-3xl font-bold mb-1"
            style={{ color: theme.colors.text.primary }}
          >
            {value}
          </div>
          <div
            className="text-xs uppercase tracking-wide"
            style={{ color: theme.colors.text.muted }}
          >
            {metric}
          </div>
        </div>

        {/* Change Indicator */}
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-medium ${
              change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
          </span>
          <span
            className="text-xs"
            style={{ color: theme.colors.text.tertiary }}
          >
            vs last period
          </span>
        </div>

        {/* Mini Sparkline (placeholder) */}
        <div className="mt-3 h-8 flex items-end gap-1">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-t opacity-30 group-hover:opacity-50 transition-opacity"
              style={{
                backgroundColor: color,
                height: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MetricCard;
