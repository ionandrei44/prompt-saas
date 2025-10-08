import { useState } from "react";
import { Card, CardBody } from "@heroui/react";
import {
  ChartBarIcon,
  TrendUpIcon,
  TargetIcon,
  LightbulbIcon,
  GearIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../styles/theme";
import TopBar from "./TopBar";
import GrowthScoreCard from "./GrowthScoreCard";
import TrendSummary from "./TrendSummary";
import QuickStatsGrid from "./QuickStatsGrid";
import InsightsPanel from "./InsightsPanel";
import GitHubCard from "./GitHubCard";
import TwitterCard from "./TwitterCard";

const DashboardTabs = () => {
  const [selected, setSelected] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { key: "overview", icon: ChartBarIcon, label: "Overview" },
    { key: "analytics", icon: TrendUpIcon, label: "Analytics" },
    { key: "goals", icon: TargetIcon, label: "Goals" },
    { key: "insights", icon: LightbulbIcon, label: "Insights" },
    { key: "settings", icon: GearIcon, label: "Settings" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ backgroundColor: theme.colors.background.primary }}
    >
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside
        className={`hidden lg:flex ${
          isCollapsed ? "w-22" : "w-[244.45px]"
        } transition-all duration-300 flex-shrink-0 border-r overflow-hidden`}
        style={{
          backgroundColor: theme.colors.background.secondary,
          borderColor: theme.colors.glass.border,
        }}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand with Collapse Button */}
          <div
            className="h-16 px-4 border-b flex items-center justify-between"
            style={{ borderColor: theme.colors.glass.border }}
          >
            {!isCollapsed ? (
              <>
                <h2
                  className="text-xl font-bold whitespace-nowrap"
                  style={{ color: theme.colors.text.primary }}
                >
                  Indie Dashboard
                </h2>
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="w-10 h-10 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ml-4"
                  style={{ color: theme.colors.text.primary }}
                  title="Collapse sidebar"
                >
                  <CaretLeftIcon size={20} weight="bold" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="w-12 h-10 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer mx-auto"
                style={{ color: theme.colors.text.primary }}
                title="Expand sidebar"
              >
                <CaretRightIcon size={20} weight="bold" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = selected === item.key;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => setSelected(item.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                  style={{
                    color: isActive
                      ? theme.colors.primary[400]
                      : theme.colors.text.secondary,
                  }}
                >
                  <IconComponent
                    size={24}
                    weight={isActive ? "bold" : "regular"}
                  />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{
          backgroundColor: theme.colors.background.secondary,
          borderColor: theme.colors.glass.border,
        }}
      >
        <div className="flex items-center justify-around px-2 py-3">
          {menuItems.map((item) => {
            const isActive = selected === item.key;
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => setSelected(item.key)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  isActive ? "bg-white/10" : "hover:bg-white/5"
                }`}
                style={{
                  color: isActive
                    ? theme.colors.primary[400]
                    : theme.colors.text.secondary,
                }}
              >
                <IconComponent
                  size={22}
                  weight={isActive ? "bold" : "regular"}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pb-20 lg:pb-0">
        {/* Top Bar with Date Range */}
        <TopBar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {selected === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="space-y-6"
                >
                  <GrowthScoreCard />
                  <TrendSummary />
                  <QuickStatsGrid />
                  <InsightsPanel />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <GitHubCard />
                    <TwitterCard />
                  </div>
                </motion.div>
              )}

              {selected === "analytics" && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <Card
                    className="max-w-md border"
                    style={{
                      background: theme.effects.glass.background,
                      backdropFilter: theme.effects.glass.backdropFilter,
                      borderColor: theme.colors.glass.border,
                    }}
                  >
                    <CardBody className="text-center py-12">
                      <div
                        className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: theme.colors.glass.white }}
                      >
                        <TrendUpIcon
                          size={48}
                          weight="regular"
                          style={{ color: theme.colors.primary[400] }}
                        />
                      </div>
                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: theme.colors.text.primary }}
                      >
                        Analytics
                      </h2>
                      <p
                        className="mb-6"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Deep dive into your growth metrics, trends, and
                        performance across all platforms.
                      </p>
                      <span
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: theme.colors.glass.white,
                          color: theme.colors.text.tertiary,
                        }}
                      >
                        Coming Soon
                      </span>
                    </CardBody>
                  </Card>
                </motion.div>
              )}

              {selected === "goals" && (
                <motion.div
                  key="goals"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <Card
                    className="max-w-md border"
                    style={{
                      background: theme.effects.glass.background,
                      backdropFilter: theme.effects.glass.backdropFilter,
                      borderColor: theme.colors.glass.border,
                    }}
                  >
                    <CardBody className="text-center py-12">
                      <div
                        className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: theme.colors.glass.white }}
                      >
                        <TargetIcon
                          size={48}
                          weight="regular"
                          style={{ color: theme.colors.status.success.main }}
                        />
                      </div>
                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: theme.colors.text.primary }}
                      >
                        Goals
                      </h2>
                      <p
                        className="mb-6"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Set and track growth targets for each platform. Monitor
                        your progress and celebrate milestones.
                      </p>
                      <span
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: theme.colors.glass.white,
                          color: theme.colors.text.tertiary,
                        }}
                      >
                        Coming Soon
                      </span>
                    </CardBody>
                  </Card>
                </motion.div>
              )}

              {selected === "insights" && (
                <motion.div
                  key="insights"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <Card
                    className="max-w-md border"
                    style={{
                      background: theme.effects.glass.background,
                      backdropFilter: theme.effects.glass.backdropFilter,
                      borderColor: theme.colors.glass.border,
                    }}
                  >
                    <CardBody className="text-center py-12">
                      <div
                        className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: theme.colors.glass.white }}
                      >
                        <LightbulbIcon
                          size={48}
                          weight="regular"
                          style={{ color: theme.colors.status.warning.main }}
                        />
                      </div>
                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: theme.colors.text.primary }}
                      >
                        Insights
                      </h2>
                      <p
                        className="mb-6"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        AI-powered recommendations and actionable insights to
                        accelerate your growth.
                      </p>
                      <span
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: theme.colors.glass.white,
                          color: theme.colors.text.tertiary,
                        }}
                      >
                        Coming Soon
                      </span>
                    </CardBody>
                  </Card>
                </motion.div>
              )}

              {selected === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <Card
                    className="max-w-md border"
                    style={{
                      background: theme.effects.glass.background,
                      backdropFilter: theme.effects.glass.backdropFilter,
                      borderColor: theme.colors.glass.border,
                    }}
                  >
                    <CardBody className="text-center py-12">
                      <div
                        className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: theme.colors.glass.white }}
                      >
                        <GearIcon
                          size={48}
                          weight="regular"
                          style={{ color: theme.colors.text.secondary }}
                        />
                      </div>
                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: theme.colors.text.primary }}
                      >
                        Settings
                      </h2>
                      <p
                        className="mb-6"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Manage your connected platforms, notifications,
                        preferences, and account settings.
                      </p>
                      <span
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: theme.colors.glass.white,
                          color: theme.colors.text.tertiary,
                        }}
                      >
                        Coming Soon
                      </span>
                    </CardBody>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardTabs;
