import { Card, CardBody } from "@heroui/react";
import {
  TrendUpIcon,
  CheckCircleIcon,
  CircleIcon,
} from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

const TrendSummary = () => {
  // Mock data - will come from API later
  const insights = [
    { type: "positive", text: "+5% followers on X" },
    { type: "positive", text: "+12 GitHub stars" },
    { type: "positive", text: "+10 newsletter subscribers" },
    { type: "neutral", text: "3 new issues opened" },
  ];

  return (
    <Card
      className="border"
      style={{
        background: theme.effects.glass.background,
        backdropFilter: theme.effects.glass.backdropFilter,
        borderColor: theme.colors.glass.border,
      }}
    >
      <CardBody className="p-6">
        <h3
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          style={{ color: theme.colors.text.primary }}
        >
          <TrendUpIcon
            size={24}
            weight="regular"
            style={{ color: theme.colors.text.primary }}
          />
          Your Growth This Month
        </h3>
        <div className="flex flex-wrap gap-3">
          {insights.map((insight, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5"
              style={{
                backgroundColor: theme.colors.glass.white,
                color:
                  insight.type === "positive"
                    ? theme.colors.status.success.main
                    : theme.colors.text.secondary,
              }}
            >
              {insight.type === "positive" ? (
                <CheckCircleIcon size={16} weight="regular" />
              ) : (
                <CircleIcon size={16} weight="regular" />
              )}
              {insight.text}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default TrendSummary;
