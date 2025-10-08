import { useState } from "react";
import { theme } from "../../styles/theme";

const RefreshButton = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5 transition-all disabled:opacity-50"
      style={{ color: theme.colors.text.secondary }}
      title="Refresh data"
    >
      <span className={`text-lg ${isRefreshing ? "animate-spin" : ""}`}>
        🔄
      </span>
      <span className="hidden sm:inline">Refresh</span>
    </button>
  );
};

export default RefreshButton;
