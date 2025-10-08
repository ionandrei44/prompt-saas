import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChartBar,
  TrendUp,
  Target,
  Lightbulb,
  Gear,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: ChartBar, label: "Overview", path: "/dashboard" },
    { icon: TrendUp, label: "Analytics", path: "/dashboard/analytics" },
    { icon: Target, label: "Goals", path: "/dashboard/goals" },
    { icon: Lightbulb, label: "Insights", path: "/dashboard/insights" },
    { icon: Gear, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300 flex-shrink-0 border-r`}
      style={{
        backgroundColor: theme.colors.background.secondary,
        borderColor: theme.colors.glass.border,
      }}
    >
      <div className="h-full flex flex-col">
        {/* Logo/Brand with Collapse Button */}
        <div
          className="p-6 border-b flex items-center justify-between"
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
                className="w-8 h-8 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center group flex-shrink-0"
                style={{ color: theme.colors.text.primary }}
                title="Collapse sidebar"
              >
                <CaretLeft
                  size={20}
                  weight="bold"
                  className="group-hover:scale-110 transition-transform"
                />
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full flex justify-center hover:bg-white/10 rounded-lg p-1 transition-all"
              style={{ color: theme.colors.text.primary }}
              title="Expand sidebar"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
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
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
