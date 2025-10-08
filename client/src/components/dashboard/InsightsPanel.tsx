import { Card, CardBody } from "@heroui/react";
import {
  TargetIcon,
  WarningIcon,
  LightbulbIcon,
  type Icon,
} from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

interface Insight {
  type: "action" | "alert" | "tip";
  title: string;
  description: string;
  icon: Icon;
}

const InsightsPanel = () => {
  // Mock data - will come from API/AI later
  const insights: Insight[] = [
    {
      type: "action",
      title: "Tweet about your latest project",
      description:
        "You gained 10 followers on X last week. Tweeting 3x/day seems to increase growth.",
      icon: TargetIcon,
    },
    {
      type: "alert",
      title: "High number of open GitHub issues",
      description:
        "Repos with open issues > 50 have slowed your engagement. Closing or labeling can help.",
      icon: WarningIcon,
    },
    {
      type: "tip",
      title: "Improve newsletter engagement",
      description:
        "Newsletter engagement dropped 5%. Consider adding a more compelling CTA.",
      icon: LightbulbIcon,
    },
  ];

  const getInsightStyle = (type: Insight["type"]) => {
    switch (type) {
      case "action":
        return {
          borderColor: theme.colors.primary[500],
          accentColor: theme.colors.primary[400],
        };
      case "alert":
        return {
          borderColor: theme.colors.status.warning.main,
          accentColor: theme.colors.status.warning.main,
        };
      case "tip":
        return {
          borderColor: theme.colors.accent.purple,
          accentColor: theme.colors.accent.purple,
        };
    }
  };

  return (
    <div className="space-y-4">
      <h2
        className="text-xl font-bold flex items-center gap-2"
        style={{ color: theme.colors.text.primary }}
      >
        <LightbulbIcon
          size={24}
          weight="regular"
          style={{ color: theme.colors.text.primary }}
        />
        Growth Insights & Recommendations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map((insight, index) => {
          const styles = getInsightStyle(insight.type);
          const IconComponent = insight.icon;
          return (
            <Card
              key={index}
              className="border-l-4"
              style={{
                background: theme.effects.cardGlass.background,
                backdropFilter: theme.effects.cardGlass.backdropFilter,
                borderColor: styles.borderColor,
              }}
            >
              <CardBody className="p-5">
                <div className="flex items-start gap-3">
                  <IconComponent
                    size={28}
                    weight="regular"
                    style={{ color: theme.colors.text.primary }}
                  />
                  <div className="flex-1">
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {insight.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {insight.description}
                    </p>
                    <button
                      className="mt-3 text-sm font-medium hover:underline"
                      style={{ color: styles.accentColor }}
                    >
                      View details →
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsPanel;
