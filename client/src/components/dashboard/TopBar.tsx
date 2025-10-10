import { theme } from "../../styles/theme";
import DateRangePicker from "./DateRangePicker";
import { UserMenu } from "./UserMenu";

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
        <UserMenu />
      </div>
    </header>
  );
};

export default TopBar;
