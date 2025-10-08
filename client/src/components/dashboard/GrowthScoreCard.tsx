import { Card, CardBody } from "@heroui/react";
import { theme } from "../../styles/theme";

const GrowthScoreCard = () => {
  const score = 78; // Mock data - will come from API later
  const change = 5; // percentage change

  const getScoreColor = (score: number) => {
    if (score >= 80) return theme.colors.status.success.main;
    if (score >= 60) return theme.colors.primary[400];
    if (score >= 40) return theme.colors.status.warning.main;
    return theme.colors.status.error.main;
  };

  return (
    <Card
      className="border"
      style={{
        background: theme.effects.glass.background,
        backdropFilter: theme.effects.glass.backdropFilter,
        borderColor: theme.colors.glass.border,
      }}
    >
      <CardBody className="p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="text-sm font-medium uppercase tracking-wide mb-2"
              style={{ color: theme.colors.text.tertiary }}
            >
              Overall Growth Score
            </h3>
            <div className="flex items-baseline gap-3">
              <span
                className="text-6xl font-bold"
                style={{ color: getScoreColor(score) }}
              >
                {score}
              </span>
              <span
                className="text-2xl"
                style={{ color: theme.colors.text.muted }}
              >
                / 100
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`text-sm font-medium ${
                  change >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
              </span>
              <span
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                vs last period
              </span>
            </div>
          </div>

          {/* Score Ring Visualization */}
          <div className="relative w-24 h-24">
            <svg className="transform -rotate-90 w-24 h-24">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke={theme.colors.glass.white}
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke={getScoreColor(score)}
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / 100)}`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default GrowthScoreCard;
