import { theme } from "../../styles/theme";
import DateRangePicker from "./DateRangePicker";

const TopBar = () => {
  return (
    <header
      className="h-16 border-b flex items-center justify-between px-6 lg:px-8"
      style={{
        backgroundColor: theme.colors.background.secondary,
        borderColor: theme.colors.glass.border,
      }}
    >
      {/* Left side - Date Range */}
      <div className="flex items-center gap-4">
        <DateRangePicker />
      </div>

      {/* Right side - User Menu */}
      <div className="flex items-center gap-4">
        {/* User Menu */}
        <div
          className="flex items-center gap-3 pl-4 border-l"
          style={{ borderColor: theme.colors.glass.border }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span
              className="text-sm font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              A
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
