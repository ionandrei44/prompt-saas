import DashboardLayout from "../components/dashboard/DashboardLayout";
import { theme } from "../styles/theme";
import { TrendUpIcon } from "@phosphor-icons/react";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div
            className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{
              background: theme.effects.glass.background,
              backdropFilter: theme.effects.glass.backdropFilter,
              borderColor: theme.colors.glass.border,
              border: "1px solid",
            }}
          >
            <TrendUpIcon
              size={48}
              weight="regular"
              style={{ color: theme.colors.text.primary }}
            />
          </div>
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            Analytics
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: theme.colors.text.secondary }}
          >
            Deep dive into your growth metrics, trends, and performance across
            all platforms.
          </p>
          <div
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: theme.colors.glass.white,
              color: theme.colors.text.tertiary,
            }}
          >
            Coming Soon
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
