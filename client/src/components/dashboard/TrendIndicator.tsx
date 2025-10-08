interface TrendIndicatorProps {
  value: number;
  suffix?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const TrendIndicator = ({
  value,
  suffix = "%",
  showIcon = true,
  size = "md",
}: TrendIndicatorProps) => {
  const isPositive = value >= 0;
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <span
      className={`font-medium ${sizeClasses[size]} ${
        isPositive ? "text-green-400" : "text-red-400"
      }`}
    >
      {showIcon && (isPositive ? "↑ " : "↓ ")}
      {Math.abs(value)}
      {suffix}
    </span>
  );
};

export default TrendIndicator;
